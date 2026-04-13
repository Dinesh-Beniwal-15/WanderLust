const Listing =require('../models/listing.js');

module.exports.index = async (req, res) => {
    let { category, search } = req.query;

    let query = {};

    // 🔥 CATEGORY FILTER
    if (category) {
        query.category = { $regex: new RegExp(`^${category}$`, "i") };
    }

    // 🔥 SEARCH FILTER (LOCATION)
    if (search && search.trim() !== "") {
        query.location = { $regex: search, $options: "i" };
    }

    const allListings = await Listing.find(query);

    res.render("listings/index.ejs", { allListings, category, search });
};

module.exports.renderNewForm=(req,res)=>{  
    res.render('listings/new.ejs');
};

module.exports.showListing=async (req,res)=>{
    const {id} = req.params;
    const listing = await Listing.findById(id).populate({path:"reviews",populate:{path:"author"}}).populate('owner');
    if(!listing){
        req.flash('error', 'Listing not found!');
        return res.redirect("/listings");
    }  
    console.log(listing);  
    res.render('listings/show.ejs', {listing});
};

module.exports.createListing=async (req,res,next)=>{
        let url=req.file.path;
        let filename=req.file.filename;
        
        const newListing = new Listing(req.body.listing);
        newListing.owner=req.user._id;
        newListing.image={url,filename};
        newListing.geometry = {
            type: "Point",
            coordinates: [req.body.listing.lng, req.body.listing.lat]
        };
        await newListing.save();
        req.flash('success', 'New listing created!');
        res.redirect('/listings');
};

module.exports.renderEditForm=async (req,res)=>{
    const {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash('error', 'Listing not found!');
        return res.redirect("/listings");
    }

    let originalImageUrl=listing.image.url;
    originalImageUrl=originalImageUrl.replace("/upload","/upload/w_250");
    res.render('listings/edit.ejs', {listing,originalImageUrl});
};

module.exports.updateListing = async (req, res) => {
  let { id } = req.params;

  const updatedData = req.body.listing;

  // 🔥 ALWAYS update coordinates
  const query = `${updatedData.location}, ${updatedData.country}`;

  try {
    const response = await fetch(
      `https://api.maptiler.com/geocoding/${encodeURIComponent(query)}.json?key=i0iVtuV4Dhkh7cc2cBXo`
    );

    const data = await response.json();

    if (data.features.length > 0) {
      const coords = data.features[0].center;

      updatedData.geometry = {
        type: "Point",
        coordinates: coords
      };
    }
  } catch (err) {
    console.log("Geocoding error:", err);
  }

  await Listing.findByIdAndUpdate(id, updatedData);

  res.redirect(`/listings/${id}`);
};

module.exports.deleteListing=async (req,res)=>{
    let {id} = req.params;
    let deletedListing=await Listing.findByIdAndDelete(id);
    req.flash('success', 'Listing deleted!');
    res.redirect("/listings");
};

