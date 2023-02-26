import React, { useEffect } from 'react'
import { useProductContext } from './Context/ProductContext'

const ArrayOfAnObject = () => {
    const {FetchObj , ArrayOfObject} = useProductContext()

       const obj = [[{
                    productName : "Plant Based Resuable Containers",
                      description: "Sourced from local farmers, plant residue from Bamboo, Wheat, Rice, and Barley is processed and molded into reusable containers which can be used hundreds of times. Microwave safe, seal proof, and sturdy, they are perfect to store snacks or lunch. Designed in USA. Tested in Germany.",
                      id:1,
                      features : ["100% recyclable." , "Chemical Free" , " Govt Approved, Tested and approved in TUV Rhineland Germany. " , " Easily Portable takeaway containers ", " Odorless tasteless and doesn’t react with hot food " , " Lightweight " , "Microwavable" ],
                      careGuide : "Can be reused hundreds of times. Just wash under a tap or in a dishwasher.",
                      images : ["./Image/ProductImage/product1_1.png" , "./Image/ProductImage/product1_2.png" , "./Image/ProductImage/product1_3.png" , "./Image/ProductImage/product1_4.png"],
                      price:339,
                },
                {
                    productName : "BioQ",
                      description: "bioQ Plantable Stationery Combo| 7 Colour Ink Seed Pen Box + 5 Premium Seed Pencil Box + 1 hand-made seed-paper notepad | Eco Friendly Jute Bag Packaging | Grow Plants From Notepads Pens & Pencils.",
                      id:2,
                      features : ["FROM USE & THROW TO USE & GROW: When the pencil is too short to write, the pen is out of ink, or the notebook is fully used, the seeds at the back can be grown into a plant" , "GREEN GIFTING PRODUCT: 100% eco-friendly product For anyone who wants to create a positive impact on the planet." , "Chemical Free" , " Govt Approved, Tested and approved in TUV Rhineland Germany. " , " Easily Portable takeaway containers ", " Odorless tasteless and doesn’t react with hot food " , " Lightweight " , "Microwavable" ],
                      careGuide : "100% eco-friendly product For anyone who wants to create a positive impact on the planet.",
                      images : ["./Image/ProductImage/product3_1.png" , "./Image/ProductImage/product3_2.png" , "./Image/ProductImage/product3_3.png" , "./Image/ProductImage/product3_4.png"],
                      price:249,
                      featured: true,
                },
                {
                    productName : "bioQ Jumbo Eco Friendly",
                      description: "bioQ Jumbo Eco Friendly Plantable Stationery Gift Box..",
                      id:3,
                      features : ["100% recyclable." , "Chemical Free" , " 2 NOTEPADS : with seed paper cover. Size: 3" + "X"," 72 natural shade pages " , " SEED PEN & PENCILS: 12 different seed's pencils + 5 plantable paper pens ", " Odorless tasteless and doesn’t react with hot food " , " Lightweight " , "Microwavable" ],
                      careGuide : "Can be reused hundreds of times. Just wash under a tap or in a dishwasher.",
                      images : ["./Image/ProductImage/product2_1.png" , "./Image/ProductImage/product2_2.png" , "./Image/ProductImage/product2_3.png" , "./Image/ProductImage/product2_4.png"],
                      price:199,
                },
                {
                    productName : "PampEarth / Ball Point Pen",
                      description: "PampEarth Ecofriendly Paper Pens | Eco Friendly Paper Pen for Offices, School | Stationery Gift for Girls, Boys, Students (Pack of 10 pens).",
                      id:4,
                      features : ["This Product Saves Trees and Grows Plants! Provides Great Writing Quality." , "No. of Piece-10 " , " Made from recycled paper. By using this eco friendly pen, you are avoiding using plastic pens which are a big cause of plastic pollution. " , " Gift Purpose: Easy to gift school children's or Donation to school students, Makes for a perfect ecofriendly gift for birthday parties", " Odorless tasteless and doesn’t react with hot food " , " Lightweight " , "Microwavable" ],
                      careGuide : "Can be reused hundreds of times. Just wash under a tap or in a dishwasher.",
                      images : ["./Image/ProductImage/product4_1.png" , "./Image/ProductImage/product4_2.png" , "./Image/ProductImage/product4_3.png" , "./Image/ProductImage/product4_4.png"],
                      price:449,
                      featured: true,
                },{
                    productName : "PAPERDOM",
                      description: "Handcrafted utilitarian hamper perfect for gifting! Adroit, sustainable and super functional; the gift hamper is an extension of our love for clean designs, productive tools and minimalism. The products are manufactured from banana fibres and cotton waste, making them tree free, environment friendly and resource efficient.)",
                      id:5,
                      features : ["Each hamper contains-" , " 1) Banana fibre box (11 x 8 x 2 in) " , " 2) Monthly Planner (10 x 7 x 1 in) " , " Banana Fibre Envelopes- set of 5 (6 x 4 in) ", " Banana Fibre Name Tags- set of 5 " , " Handcrafted Macramè Bookmark" , " Tree Free Pencils- set of 4 " ],
                      careGuide : "Handcrafted utilitarian hamper perfect for gifting! Adroit, sustainable and super functional; the gift hamper is an extension of our love for clean designs, productive tools and minimalism.",
                      images : ["./Image/ProductImage/product5_1.png" , "./Image/ProductImage/product5_2.png" , "./Image/ProductImage/product5_3.png" , "./Image/ProductImage/product5_4.png"],
                      price:399,
                      featured: true,
                },{
                    productName : "Desk Calendar, Organizer",
                      description: "Cork Table Calendar VPS-JUT-2519-ACI | Eco Friendly & Lightweight, Stationery Organizer, Office Desk Organizers | Size: (12x6.5x8.5 cms) | Design: VPS Impex ",
                      id:6,
                      features : ["100% recyclable." , "Chemical Free" , " Cork Table Calendar, Desk Calendar, Eco Friendly & Lightweight, Stain-resistant. " , " Easily Portable takeaway containers ", " Handcrafted Macramè Bookmark " , " Lightweight " , "Microwavable" ],
                      careGuide : "Cork Table Calendar, Desk Calendar, Eco Friendly & Lightweight, Stain-resistant.",
                      images : ["./Image/ProductImage/product6_1.png" , "./Image/ProductImage/product6_2.png" , "./Image/ProductImage/product6_3.png" , "./Image/ProductImage/product6_4.png"],
                      price:79,
                },{
                    productName : " Cello Whitemate Whiteboard Markers ",
                      description: " Cello Whitemate Whiteboard Markers | Set of 6 | Assorted Ink Colours | Whiteboard Marker with Easily Erasable Ink | Refillable Whiteboard Markers Markers ",
                      id:1,
                      features : ["The Cello Whitemate Whiteboard Markers are available in 6 vibrant ink colours" , "These markers have a bright ink shade & colour density for better visibility" , " Writes longer than most other marker pens. " , " This marker pen leaves no ghost marks and can be dry-wiped without leaving a trace.", " Odorless tasteless and doesn’t react with hot food " , " Lightweight " , "Microwavable" ],
                      careGuide : "Cello Whitemate Whiteboard Markers | Set of 6 | Assorted Ink Colours | Whiteboard Marker with Easily Erasable Ink | Refillable Whiteboard Markers Markers. ",
                      images : ["./Image/ProductImage/product7_1.png" , "./Image/ProductImage/product7_2.png" , "./Image/ProductImage/product7_3.png" , "./Image/ProductImage/product7_4.png"],
                      price:179,
                      featured: true,
                },{
                    productName : "Plant Based Resuable Containers",
                      description: "Sourced from local farmers, plant residue from Bamboo, Wheat, Rice, and Barley is processed and molded into reusable containers which can be used hundreds of times. Microwave safe, seal proof, and sturdy, they are perfect to store snacks or lunch. Designed in USA. Tested in Germany.",
                      id:1,
                      features : ["100% recyclable." , "Chemical Free" , " Govt Approved, Tested and approved in TUV Rhineland Germany. " , " Easily Portable takeaway containers ", " Odorless tasteless and doesn’t react with hot food " , " Lightweight " , "Microwavable" ],
                      careGuide : "Can be reused hundreds of times. Just wash under a tap or in a dishwasher.",
                      images : ["./Image/ProductImage/product6_3.png" , "./Image/ProductImage/product4_2.png" , "./Image/ProductImage/product2_3.png" , "./Image/ProductImage/product6_4.png"],
                      price:333,
                }]]


    useEffect(()=>{
      FetchObj(obj);
    },[])

  return (
    <div>
    </div>
  )
}

export default ArrayOfAnObject
