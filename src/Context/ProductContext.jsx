import axios from 'axios';
import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { useParams } from 'react-router-dom';
import Grid from '../Grid';
import reducer from '../Reducer/ProductReducer';


const API = "https://api.pujakaitem.com/api/products";

const Context = createContext()

const obj = [[{
  productName : "Plant Containers",
    description: "Sourced from local farmers, plant residue from Bamboo, Wheat, Rice, and Barley is processed and molded into reusable containers which can be used hundreds of times. Microwave safe, seal proof, and sturdy, they are perfect to store snacks or lunch. Designed in USA. Tested in Germany.",
    id:1,
    features : ["100% recyclable." , "Chemical Free" , " Govt Approved, Tested and approved in TUV Rhineland Germany. " , " Easily Portable takeaway containers ", " Odorless tasteless and doesn’t react with hot food " , " Lightweight " , "Microwavable" ],
    careGuide : "Can be reused hundreds of times. Just wash under a tap or in a dishwasher.",
    // images : ["./Image/ProductImage/product1_1.png" , "./Image/ProductImage/product1_2.png" , "./Image/ProductImage/product1_3.png" , "./Image/ProductImage/product1_4.png"],
    images : ["https://cdn.shopify.com/s/files/1/0197/8160/products/biodegradable-hot-drinks-cups-lids-pretty-little-party-shop-party-cups-1962818011202.jpg?v=1658288036&width=533",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCBvsL2H2a1TvXMbErQIS6lXn5opT5dGGbdv6qMcKq5FfmkUvOJvdNaESZq51ixQn0pyA&usqp=CAU",
              "https://cdn.store-assets.com/s/362578/i/36214176.png?width=480" ,
              "https://www.atpack.com.au/assets/thumbL/SL8.jpg?20201026190653" ],
    starRating:"4",
    price:339,
},
{
  productName : "BioQ",
    description: "bioQ Plantable Stationery Combo| 7 Colour Ink Seed Pen Box + 5 Premium Seed Pencil Box + 1 hand-made seed-paper notepad | Eco Friendly Jute Bag Packaging | Grow Plants From Notepads Pens & Pencils.",
    id:2,
    features : ["FROM USE & THROW TO USE & GROW: When the pencil is too short to write, the pen is out of ink, or the notebook is fully used, the seeds at the back can be grown into a plant" , "GREEN GIFTING PRODUCT: 100% eco-friendly product For anyone who wants to create a positive impact on the planet." , "Chemical Free" , " Govt Approved, Tested and approved in TUV Rhineland Germany. " , " Easily Portable takeaway containers ", " Odorless tasteless and doesn’t react with hot food " , " Lightweight " , "Microwavable" ],
    careGuide : "100% eco-friendly product For anyone who wants to create a positive impact on the planet.",
    // images : ["./Image/ProductImage/product3_1.png" , "./Image/ProductImage/product3_2.png" , "./Image/ProductImage/product3_3.png" , "./Image/ProductImage/product3_4.png"],
    images : ["https://cdn.shopaccino.com/ecofriendlystationary/products/whatsapp-image-2020-07-29-at-91042-am-205384_l.jpeg?v=446",
            "https://cdn.shopaccino.com/ecofriendlystationary/products/whatsapp-image-2020-07-29-at-91043-am-982973_l.jpeg?v=446",
            "https://cdn.shopaccino.com/ecofriendlystationary/products/whatsapp-image-2020-07-29-at-91042-am-1-187793_l.jpeg?v=446" ,
              "https://cdn.shopaccino.com/ecofriendlystationary/products/whatsapp-image-2020-07-29-at-91041-am-1-647037_l.jpeg?v=446"],
    price:249,
    starRating:"5",
    featured: true,
},
{
  productName : "Wooden Brush",
    description: "bioQ Jumbo Eco Friendly Plantable Stationery Gift Kit..",
    id:3,
    features : ["100% recyclable." , "Chemical Free" , " 2 NOTEPADS : with seed paper cover. Size: 3" + "X"," 72 natural shade pages " , " SEED PEN & PENCILS: 12 different seed's pencils + 5 plantable paper pens ", " Odorless tasteless and doesn’t react with hot food " , " Lightweight " , "Microwavable" ],
    careGuide : "Can be reused hundreds of times. Just wash under a tap or in a dishwasher.",
    // images : ["./Image/ProductImage/product2_1.png" , "./Image/ProductImage/product2_2.png" , "./Image/ProductImage/product2_3.png" , "./Image/ProductImage/product2_4.png"],
    images:["https://cdn.shopaccino.com/ecofriendlystationary/products/img3437-484959_l.jpg?v=446",
          "https://cdn.shopaccino.com/ecofriendlystationary/products/img3441-329845_l.jpg?v=446" ,
            "https://cdn.shopaccino.com/ecofriendlystationary/products/img3431-465026_l.jpg?v=446",
            "https://cdn.shopaccino.com/ecofriendlystationary/products/img3438-422385_l.jpg?v=446"],
    starRating:"3.4",
    price:199,
},
{
  productName : "PampEarth",
    description: "PampEarth Ecofriendly Paper Pens | Eco Friendly Paper Pen for Offices, School | Stationery Gift for Girls, Boys, Students (Pack of 10 pens).",
    id:4,
    features : ["This Product Saves Trees and Grows Plants! Provides Great Writing Quality." , "No. of Piece-10 " , " Made from recycled paper. By using this eco friendly pen, you are avoiding using plastic pens which are a big cause of plastic pollution. " , " Gift Purpose: Easy to gift school children's or Donation to school students, Makes for a perfect ecofriendly gift for birthday parties", " Odorless tasteless and doesn’t react with hot food " , " Lightweight " , "Microwavable" ],
    careGuide : "Can be reused hundreds of times. Just wash under a tap or in a dishwasher.",
    // images : ["./Image/ProductImage/product4_1.png" , "./Image/ProductImage/product4_2.png" , "./Image/ProductImage/product4_3.png" , "./Image/ProductImage/product4_4.png"],
    images :["https://cdn.shopify.com/s/files/1/0523/3252/7770/products/3-paper-pencils-2mb_1024x.jpg?v=1654079487",
            "https://cdn.shopify.com/s/files/1/0523/3252/7770/products/4-paper-pens-2mb_600x.jpg?v=1654079487",
              "https://cdn.shopify.com/s/files/1/0523/3252/7770/products/1-pencils-and-pens-2mb_600x.jpg?v=1654079488",
              "https://cdn.shopify.com/s/files/1/0523/3252/7770/products/2.paper-pencils-_2B-pens-combo-2-mb_600x.jpg?v=1654079488"
            ],
    price:449,
    starRating:"4.3",
    featured: true,
},{
  productName : "Handmade Notebook",
    description: "Handcrafted utilitarian hamper perfect for gifting! Adroit, sustainable and super functional; the gift hamper is an extension of our love for clean designs, productive tools and minimalism. The products are manufactured from banana fibres and cotton waste, making them tree free, environment friendly and resource efficient.)",
    id:5,
    features : ["Handmade Hemp Paper Notebook" , " 1) Banana fibre box (11 x 8 x 2 in) " , " 2) Monthly Planner (10 x 7 x 1 in) " , " Banana Fibre Envelopes- set of 5 (6 x 4 in) ", " Banana Fibre Name Tags- set of 5 " , " Handcrafted Macramè Bookmark" , " Tree Free Pencils- set of 4 " ],
    careGuide : "Handcrafted utilitarian hamper perfect for gifting! Adroit, sustainable and super functional; the gift hamper is an extension of our love for clean designs, productive tools and minimalism.",
    // images : ["./Image/ProductImage/product5_1.png" , "./Image/ProductImage/product5_2.png" , "./Image/ProductImage/product5_3.png" , "./Image/ProductImage/product5_4.png"],
    images : ["https://cdn.shopify.com/s/files/1/0523/3252/7770/products/tsYWeVb20m_600x.jpg?v=1650458238",
            "https://cdn.shopify.com/s/files/1/0523/3252/7770/products/g6NDaAu7jc_600x.jpg?v=1650458238",
            "https://cdn.shopify.com/s/files/1/0523/3252/7770/products/xotFdd5W7w_753a6b00-5487-480b-a98b-999794222079_600x.jpg?v=1650458238",
            "https://cdn.shopify.com/s/files/1/0523/3252/7770/products/7rMvbDTDL3_600x.jpg?v=1650458238"],
    price:399,
    starRating:"4.2",
    featured: true,
},{
  productName : "Plantable Calendar",
    description: "Cork Table Calendar VPS-JUT-2519-ACI | Eco Friendly & Lightweight, Stationery Organizer, Office Desk Organizers | Size: (12x6.5x8.5 cms) | Design: VPS Impex ",
    id:6,
    features : ["100% recyclable." , "Chemical Free" , " Cork Table Calendar, Desk Calendar, Eco Friendly & Lightweight, Stain-resistant. " , " Easily Portable takeaway containers ", " Handcrafted Macramè Bookmark " , " Lightweight " , "Microwavable" ],
    careGuide : "Cork Table Calendar, Desk Calendar, Eco Friendly & Lightweight, Stain-resistant.",
    // images : ["./Image/ProductImage/product6_1.png" , "./Image/ProductImage/product6_2.png" , "./Image/ProductImage/product6_4.png" , "./Image/ProductImage/product6_4.png"],
    images : ["https://cdn.shopify.com/s/files/1/0523/3252/7770/products/1_83c55ad6-c6c2-4060-8a51-29795b09dc2d_600x.png?v=1670827687",
            "https://cdn.shopify.com/s/files/1/0523/3252/7770/products/5_1_1024x.png?v=1670827688",
            "https://cdn.shopify.com/s/files/1/0523/3252/7770/products/2_90ec3729-7cda-4457-b241-f9ecefb083ae_1024x.png?v=1670827686",
            "https://cdn.shopify.com/s/files/1/0523/3252/7770/products/NY48-J-C-3_600x.png?v=1670827685"],
    starRating:"3.4",
    price:79,
},{
  productName : " Food Packaging",
    description: " Cello Whitemate Whiteboard Markers | Set of 6 | Assorted Ink Colours | Whiteboard Marker with Easily Erasable Ink | Refillable Whiteboard Markers Markers ",
    id:7,
    features : ["The Cello Whitemate Whiteboard Markers are available in 6 vibrant ink colours" , "These markers have a bright ink shade & colour density for better visibility" , " Writes longer than most other marker pens. " , " This marker pen leaves no ghost marks and can be dry-wiped without leaving a trace.", " Odorless tasteless and doesn’t react with hot food " , " Lightweight " , "Microwavable" ],
    careGuide : "Cello Whitemate Whiteboard Markers | Set of 6 | Assorted Ink Colours | Whiteboard Marker with Easily Erasable Ink | Refillable Whiteboard Markers Markers. ",
    // images : ["./Image/ProductImage/product7_1.png" , "./Image/ProductImage/product7_2.png" , "./Image/ProductImage/product7_3.png" , "./Image/ProductImage/product7_4.png"],
    images : ["https://media.greenmatters.com/brand-img/JuL_1l6JE/2160x1130/eco-friendly-packaging-1673964242043.jpg?position=top" ,
               "https://takeawaypackaging.co.uk/wp-content/uploads/2022/04/Eco-Packaging-Group-2-1024x683.jpg" ,
                "http://cdn.shopify.com/s/files/1/0025/8631/2764/articles/Eco-friendly_Food_Packaging_1024x.jpg?v=1662449999" ,
                 "https://directimex.com//wp-content/uploads/2021/10/Eco-Friendly-Food-Boxes-wodden-fork-with-leaves-grey-background-feat.jpg"],
    price:179,
    starRating:"4.4",
    featured: true,
},{
  productName : "Resuable Containers",
    description: "Sourced from local farmers, plant residue from Bamboo, Wheat, Rice, and Barley is processed and molded into reusable containers which can be used hundreds of times. Microwave safe, seal proof, and sturdy, they are perfect to store snacks or lunch. Designed in USA. Tested in Germany.",
    id:8,
    features : ["100% recyclable." , "Chemical Free" , " Govt Approved, Tested and approved in TUV Rhineland Germany. " , " Easily Portable takeaway containers ", " Odorless tasteless and doesn’t react with hot food " , " Lightweight " , "Microwavable" ],
    careGuide : "Can be reused hundreds of times. Just wash under a tap or in a dishwasher.",
    // images : ["./Image/ProductImage/product6_1.png" , "./Image/ProductImage/product4_2.png" , "./Image/ProductImage/product2_3.png" , "./Image/ProductImage/product6_4.png"],
        images : ["https://kraftmiddleeast.com/wp-content/uploads/2022/05/2-3-768x768.jpg" , 
                  "https://kraftmiddleeast.com/wp-content/uploads/2022/05/1-3.jpg" ,
                  "https://kraftmiddleeast.com/wp-content/uploads/2022/05/6-2-768x768.jpg",
                    "https://kraftmiddleeast.com/wp-content/uploads/2022/05/3-3-768x768.jpg"
                  ],
    starRating:"3.7",
    price:333,
},



{
  productName : "Pencils",
    description: "PampEarth Ecofriendly Paper Pens | Eco Friendly Paper Pen for Offices, School | Stationery Gift for Girls, Boys, Students (Pack of 10 pens).",
    id:9,
    features : ["This Product Saves Trees and Grows Plants! Provides Great Writing Quality." , "No. of Piece-10 " , " Made from recycled paper. By using this eco friendly pen, you are avoiding using plastic pens which are a big cause of plastic pollution. " , " Gift Purpose: Easy to gift school children's or Donation to school students, Makes for a perfect ecofriendly gift for birthday parties", " Odorless tasteless and doesn’t react with hot food " , " Lightweight " , "Microwavable" ],
    careGuide : "Can be reused hundreds of times. Just wash under a tap or in a dishwasher.",
    // images : ["./Image/ProductImage/product4_1.png" , "./Image/ProductImage/product4_2.png" , "./Image/ProductImage/product4_3.png" , "./Image/ProductImage/product4_4.png"],
    images : ["https://cdn.shopaccino.com/ecofriendlystationary/products/5-pen-5-pencil--1e-969399_s.jpg?v=446",
              "https://cdn.shopaccino.com/ecofriendlystationary/products/5-pen-5-pencil--1a-220823_s.jpg?v=446",
              "https://cdn.shopaccino.com/ecofriendlystationary/products/5-pen-5-pencil--1b-985252_s.jpg?v=446",
              "https://cdn.shopaccino.com/ecofriendlystationary/products/5-pen-5-pencil--1c-849391_s.jpg?v=446"],
    starRating:"3.9",
    price:449,
    // featured: true,
},{
  productName : "Organic Cotton",
    description: "Handcrafted utilitarian hamper perfect for gifting! Adroit, sustainable and super functional; the gift hamper is an extension of our love for clean designs, productive tools and minimalism. The products are manufactured from banana fibres and cotton waste, making them tree free, environment friendly and resource efficient.)",
    id:10,
    features : ["Each hamper contains-" , " 1) Banana fibre box (11 x 8 x 2 in) " , " 2) Monthly Planner (10 x 7 x 1 in) " , " Banana Fibre Envelopes- set of 5 (6 x 4 in) ", " Banana Fibre Name Tags- set of 5 " , " Handcrafted Macramè Bookmark" , " Tree Free Pencils- set of 4 " ],
    careGuide : "Handcrafted utilitarian hamper perfect for gifting! Adroit, sustainable and super functional; the gift hamper is an extension of our love for clean designs, productive tools and minimalism.",
    // images : ["./Image/ProductImage/product5_1.png" , "./Image/ProductImage/product5_2.png" , "./Image/ProductImage/product5_3.png" , "./Image/ProductImage/product5_4.png"],
    images : ["https://cdn.shopify.com/s/files/1/0523/3252/7770/products/EYPI5_3_600x.jpg?v=1669629659",
            "https://cdn.shopify.com/s/files/1/0523/3252/7770/products/EYPI5_2_600x.jpg?v=1669629659",
            "https://cdn.shopify.com/s/files/1/0523/3252/7770/products/EYPI5_1_600x.jpg?v=1669629659",
            "https://cdn.shopify.com/s/files/1/0523/3252/7770/products/EYPI5_3_600x.jpg?v=1669629659"
            ],
    starRating:"5",
    price:399,
    // featured: true,
},{
  productName : "Cotton Yoga Mat",
    description: "Cork Table Calendar VPS-JUT-2519-ACI | Eco Friendly & Lightweight, Stationery Organizer, Office Desk Organizers | Size: (12x6.5x8.5 cms) | Design: VPS Impex ",
    id:11,
    features : ["100% recyclable." , "Chemical Free" , " Cork Table Calendar, Desk Calendar, Eco Friendly & Lightweight, Stain-resistant. " , " Easily Portable takeaway containers ", " Handcrafted Macramè Bookmark " , " Lightweight " , "Microwavable" ],
    careGuide : "Cork Table Calendar, Desk Calendar, Eco Friendly & Lightweight, Stain-resistant.",
    // images : ["./Image/ProductImage/product6_1.png" , "./Image/ProductImage/product6_2.png" , "./Image/ProductImage/product6_4.png" , "./Image/ProductImage/product6_4.png"],
    images : ["https://cdn.shopify.com/s/files/1/0523/3252/7770/products/CHAKRAMAT_1_600x.jpg?v=1666335721",
              "https://cdn.shopify.com/s/files/1/0523/3252/7770/products/CHAKRAMAT_2_1024x.jpg?v=1669743728",
            "https://cdn.shopify.com/s/files/1/0523/3252/7770/products/CHAKRAMAT_4_600x.jpg?v=1668054251",
            "https://cdn.shopify.com/s/files/1/0523/3252/7770/products/CHAKRAMAT_5_600x.jpg?v=1668054251"],
    starRating:"4",
    price:79,
},{
  productName : " Brass Dhoop Stand ",
    description: " Cello Whitemate Whiteboard Markers | Set of 6 | Assorted Ink Colours | Whiteboard Marker with Easily Erasable Ink | Refillable Whiteboard Markers Markers ",
    id:12,
    features : ["The Cello Whitemate Whiteboard Markers are available in 6 vibrant ink colours" , "These markers have a bright ink shade & colour density for better visibility" , " Writes longer than most other marker pens. " , " This marker pen leaves no ghost marks and can be dry-wiped without leaving a trace.", " Odorless tasteless and doesn’t react with hot food " , " Lightweight " , "Microwavable" ],
    careGuide : "Cello Whitemate Whiteboard Markers | Set of 6 | Assorted Ink Colours | Whiteboard Marker with Easily Erasable Ink | Refillable Whiteboard Markers Markers. ",
    // images : ["./Image/ProductImage/product7_1.png" , "./Image/ProductImage/product7_2.png" , "./Image/ProductImage/product7_3.png" , "./Image/ProductImage/product7_4.png"],
    images : ["https://cdn.shopify.com/s/files/1/0523/3252/7770/products/BR-MA-DD01-GIFTBOX-1_600x.jpg?v=1662706544",
              "https://cdn.shopify.com/s/files/1/0523/3252/7770/products/BR-MA-DD01-GIFTBOX-3_600x.jpg?v=1662706544",
            "https://cdn.shopify.com/s/files/1/0523/3252/7770/products/BR-MA-DD01-GIFTBOX-1_600x.jpg?v=1662706544",
          "https://cdn.shopify.com/s/files/1/0523/3252/7770/products/BR-MA-DD01-GIFTBOX-5_600x.jpg?v=1662706544"],
    starRating:"4.8",
    price:179,
    featured: true,
}]];

const initialState = {
    isLoading:false,
    allProduct : [],
    featureProduct : [],
    singlePageObject : {},
}

const AppContext = ({children}) => {
  const[state , dispatch] =  useReducer(reducer , initialState);

  // console.log(state.singlePageObject)

  // console.log("allProduct" , state.allProduct , "featureProduct" , state.featureProduct );
  // console.log(state.singlePageObject);

    // single product 

// const FetchObj = (obj) => {
//   // console.log(obj);
//   for (let i = 0; i < obj.length; i++) {
//     dispatch({type:"SET_ALL_PRODUCT" , payload:obj[i]})
//   }
// }

// console.log(state.featureProductForSinglePage);

const FetchObj = () => {
  let ObjMap = obj.map((curEl,ind) => {
      // console.log(curEl);
      return dispatch({type:"SET_ALL_PRODUCT" , payload:curEl})
  })
  return ObjMap;
}


// use Effect 

useEffect(() => {
  FetchObj();
},[])



const SingleProductPageFunction = (index) => {
  // console.log(index)
  const Single_Product_Obj = state.allProduct.filter(( curEl , ind ) => {
    // console.log(curEl.id == index);
    return curEl.id == index;
  })
  // console.log(Single_Product_Obj);
  return dispatch({type:"Single_Product_Page_Function" , payload:Single_Product_Obj})
}

    return (
    <>
        <Context.Provider value={{...state , FetchObj , SingleProductPageFunction}}>
        {children}
        </Context.Provider>

    </>
  )
}


const useProductContext = () => {
    return useContext(Context);
}

export {AppContext , useProductContext , Context}