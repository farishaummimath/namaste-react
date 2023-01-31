import React from "react";
import ReactDOM from "react-dom/client";
import logo from './images/logo.png';

/**
     Header
        - Logo(Title)
        - Nav Items(Right Side)
        - Cart
     Body 
        - Search bar
        - RestrauntList
          - RestaurantCard (many cards)
              - Image
              - Name
              - Rating
              - Cusines
     Footer
      - links
      - Copyright
    
    */

//Config Driven UI


const imgCdnURL = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
const restaurantList = [
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "124461",
            "name": "Iyengars Bakery",
            "uuid": "0388f971-9ffd-40af-b08c-8f73365887ec",
            "city": "1",
            "area": "Marathahalli",
            "totalRatingsString": "100+ ratings",
            "cloudinaryImageId": "wy6u0hbrsvkzm2thmpz9",
            "cuisines": [
                "Bakery",
                "Snacks",
                "Desserts",
                "Sweets"
            ],
            "tags": [],
            "costForTwo": 15000,
            "costForTwoString": "₹150 FOR TWO",
            "deliveryTime": 28,
            "minDeliveryTime": 28,
            "maxDeliveryTime": 28,
            "slaString": "28 MINS",
            "lastMileTravel": 5,
            "slugs": {
                "restaurant": "iyengars-bakery-kengeri",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "51, Green Garden Layout,  Shirdi Sai temple road, Munnekolala, Bangalore",
            "locality": "Munnekollal",
            "parentId": 21169,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 4600,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 4600,
                "message": "",
                "title": "Delivery Charge",
                "amount": "4600",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=5731396~p=1~eid=00000185-f2fb-28ed-15e6-558500ba014f",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "5 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "124461",
                "deliveryTime": 28,
                "minDeliveryTime": 28,
                "maxDeliveryTime": 28,
                "lastMileTravel": 5,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.0",
            "totalRatings": 100,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "363",
            "name": "Meghana Foods",
            "uuid": "b98bbbc7-7ca4-4aa9-867a-eb862a01efde",
            "city": "1",
            "area": "Marathahalli",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "yfyo8aklppbwdplv7ofp",
            "cuisines": [
                "Biryani",
                "Andhra",
                "South Indian",
                "North Indian",
                "Chinese",
                "Seafood"
            ],
            "tags": [],
            "costForTwo": 50000,
            "costForTwoString": "₹500 FOR TWO",
            "deliveryTime": 26,
            "minDeliveryTime": 26,
            "maxDeliveryTime": 26,
            "slaString": "26 MINS",
            "lastMileTravel": 3,
            "slugs": {
                "restaurant": "meghana-foods-outer-ring-road-marathahalli",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "Above Sony Centre, Opposite Park Plaza, Outer Ring Road, Marathahalli",
            "locality": "Outer Ring Road",
            "parentId": 635,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3400,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3400,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3400",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "3 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "363",
                "deliveryTime": 26,
                "minDeliveryTime": 26,
                "maxDeliveryTime": 26,
                "lastMileTravel": 3,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.2",
            "totalRatings": 1000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "72821",
            "name": "Burger King",
            "uuid": "d9021b3a-1e7c-497a-b52b-2561ad674af6",
            "city": "1",
            "area": "Kaikondrahalli",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "maf1fgipihaidm3kertx",
            "cuisines": [
                "Burgers",
                "American"
            ],
            "tags": [],
            "costForTwo": 35000,
            "costForTwoString": "₹350 FOR TWO",
            "deliveryTime": 31,
            "minDeliveryTime": 31,
            "maxDeliveryTime": 31,
            "slaString": "31 MINS",
            "lastMileTravel": 4.400000095367432,
            "slugs": {
                "restaurant": "burger-king-bellandur-bellandursarjapur",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "Burger King, Surjapur road, Dodda Kannali  Bengaluru South Karnataka--560035",
            "locality": "Dodda Kannali",
            "parentId": 166,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "Get every item under 129",
                "shortDescriptionList": [
                    {
                        "meta": "Get every item under 129",
                        "discountType": "FinalPrice",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "Get every item under 129",
                        "discountType": "FinalPrice",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "",
                "shortDescriptionList": [
                    {
                        "meta": "",
                        "discountType": "FinalPrice",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "Get every item under 129",
                        "discountType": "FinalPrice",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 4000,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 4000,
                "message": "",
                "title": "Delivery Charge",
                "amount": "4000",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "4.4 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "72821",
                "deliveryTime": 31,
                "minDeliveryTime": 31,
                "maxDeliveryTime": 31,
                "lastMileTravel": 4.400000095367432,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.2",
            "totalRatings": 1000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "286575",
            "name": "Chai Point",
            "uuid": "167c0406-ff0c-4707-b163-3390b9aeb5e6",
            "city": "1",
            "area": "Sarjapur Road",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "hwz6bkjkrjthkygoudgq",
            "cuisines": [
                "Bakery",
                "Beverages",
                "Maharashtrian",
                "Snacks",
                "Street Food",
                "South Indian",
                "Punjabi"
            ],
            "tags": [],
            "costForTwo": 15000,
            "costForTwoString": "₹150 FOR TWO",
            "deliveryTime": 30,
            "minDeliveryTime": 30,
            "maxDeliveryTime": 30,
            "slaString": "30 MINS",
            "lastMileTravel": 4.099999904632568,
            "slugs": {
                "restaurant": "chai-point-doddakannelli-bellandur-sarjapur",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "53,Carmelaram Post,1,Sarjapur Main Rd,Countryside Layout,Rainbow Drive,Doddakannelli,Bengaluru,Karnataka-560035",
            "locality": "Doddakannelli",
            "parentId": 1607,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "50% off",
                "shortDescriptionList": [
                    {
                        "meta": "50% off | Use GUILTFREEJAN",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "50% off up to ₹125 | Use code GUILTFREEJAN",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "50% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use GUILTFREEJAN",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "50% off up to ₹125 | Use code GUILTFREEJAN",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 4000,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 4000,
                "message": "",
                "title": "Delivery Charge",
                "amount": "4000",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=5737803~p=4~eid=00000185-f2fb-28ed-15e6-558600ba0406",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "4 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "286575",
                "deliveryTime": 30,
                "minDeliveryTime": 30,
                "maxDeliveryTime": 30,
                "lastMileTravel": 4.099999904632568,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.3",
            "totalRatings": 1000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "10590",
            "name": "Pizza Hut",
            "uuid": "03cc7ed1-213d-4c19-9dbe-56e4a43a23d1",
            "city": "1",
            "area": "Bellandur",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "glve2virtsuvs7xojmby",
            "cuisines": [
                "Pizzas"
            ],
            "tags": [],
            "costForTwo": 30000,
            "costForTwoString": "₹300 FOR TWO",
            "deliveryTime": 35,
            "minDeliveryTime": 35,
            "maxDeliveryTime": 35,
            "slaString": "35 MINS",
            "lastMileTravel": 3.5999999046325684,
            "slugs": {
                "restaurant": "pizza-hut-varthur-hubli-sarjapur-road-bellandursarjapur",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "#5,7,8, Bellaandur Village, Varthu Hubli sarjapura road, Bangalore - 5660103",
            "locality": "Dr Puneeth Rajkumar Road",
            "parentId": 721,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "50% off",
                "shortDescriptionList": [
                    {
                        "meta": "50% off | Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "50% off up to ₹100 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "50% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "50% off up to ₹100 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3400,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3400,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3400",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "3.5 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "10590",
                "deliveryTime": 35,
                "minDeliveryTime": 35,
                "maxDeliveryTime": 35,
                "lastMileTravel": 3.5999999046325684,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "3.6",
            "totalRatings": 1000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "279741",
            "name": "Easy Bites by Hotel Empire",
            "uuid": "d9ab4a4f-8464-4352-a387-9cd2b07842cc",
            "city": "1",
            "area": "Marathahalli",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "d06b7fa84cb8f8193f60d4c2de172347",
            "cuisines": [
                "Snacks",
                "Fast Food",
                "Beverages"
            ],
            "tags": [],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 43,
            "minDeliveryTime": 43,
            "maxDeliveryTime": 43,
            "slaString": "43 MINS",
            "lastMileTravel": 6.199999809265137,
            "slugs": {
                "restaurant": "easy-bites-marathahalli-marathahalli",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "SITE NO.4,SY NO.7/3,VARTHUR HOBLI,BANGALORE-560037,District-B.B.M.P East,STATE-Karnataka",
            "locality": "BEML Layout",
            "parentId": 8503,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "60% off",
                "shortDescriptionList": [
                    {
                        "meta": "60% off | Use WELCOMEBACK",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "60% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use WELCOMEBACK",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 5200,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 5200,
                "message": "",
                "title": "Delivery Charge",
                "amount": "5200",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=5629255~p=7~eid=00000185-f2fb-28ed-15e6-558700ba0726",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "6.1 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "279741",
                "deliveryTime": 43,
                "minDeliveryTime": 43,
                "maxDeliveryTime": 43,
                "lastMileTravel": 6.199999809265137,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.1",
            "totalRatings": 1000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "424658",
            "name": "Asha Tiffins",
            "uuid": "d79cd5d9-7158-45f1-a198-e563f0e46406",
            "city": "1",
            "area": "Aecs Layout",
            "totalRatingsString": "5000+ ratings",
            "cloudinaryImageId": "hpncnz3sfv3gigsukkts",
            "cuisines": [
                "South Indian"
            ],
            "tags": [],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 35,
            "minDeliveryTime": 35,
            "maxDeliveryTime": 35,
            "slaString": "35 MINS",
            "lastMileTravel": 6.699999809265137,
            "slugs": {
                "restaurant": "asha-tiffins-marathahalli-marathahalli",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "#551,AECS Layout main road, 'B' Block AECS Layout,Opp.BBMP ward office,Marathahalli,Bangalore - 560037",
            "locality": "B Block",
            "parentId": 236243,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "60% off",
                "shortDescriptionList": [
                    {
                        "meta": "60% off | Use WELCOMEBACK",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "60% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use WELCOMEBACK",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 5200,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 5200,
                "message": "",
                "title": "Delivery Charge",
                "amount": "5200",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "6.6 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "424658",
                "deliveryTime": 35,
                "minDeliveryTime": 35,
                "maxDeliveryTime": 35,
                "lastMileTravel": 6.699999809265137,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.4",
            "totalRatings": 5000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "454137",
            "name": "Nando's",
            "uuid": "8a9ae77d-2ec8-4b86-afbf-0e45805af81b",
            "city": "1",
            "area": "Sarjapur Road",
            "totalRatingsString": "100+ ratings",
            "cloudinaryImageId": "a79a626c3b89207ddc8d9252fe2a1591",
            "cuisines": [
                "Burgers",
                "Fast Food",
                "Grill",
                "Snacks"
            ],
            "tags": [],
            "costForTwo": 35000,
            "costForTwoString": "₹350 FOR TWO",
            "deliveryTime": 31,
            "minDeliveryTime": 31,
            "maxDeliveryTime": 31,
            "slaString": "31 MINS",
            "lastMileTravel": 4.099999904632568,
            "slugs": {
                "restaurant": "nandos-countryside-layout-bellandur-sarjapur",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "#53, Carmelaram Post, 1, Marathahalli - Sarjapur Rd, Countryside Layout, Rainbow Drive, Doddakannelli, Bengaluru, Karnataka 560035",
            "locality": "Doddakannelli",
            "parentId": 2155,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "60% off",
                "shortDescriptionList": [
                    {
                        "meta": "60% off | Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "60% off up to ₹120 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "60% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "60% off up to ₹120 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 4000,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 4000,
                "message": "",
                "title": "Delivery Charge",
                "amount": "4000",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=5790267~p=10~eid=00000185-f2fb-28ed-15e6-558800ba0a2b",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "4 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "454137",
                "deliveryTime": 31,
                "minDeliveryTime": 31,
                "maxDeliveryTime": 31,
                "lastMileTravel": 4.099999904632568,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.3",
            "totalRatings": 100,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "251475",
            "name": "KFC",
            "uuid": "d00bffde-b7fc-4d29-84b0-f9a0703ce966",
            "city": "1",
            "area": "Bellandur",
            "totalRatingsString": "100+ ratings",
            "cloudinaryImageId": "bdcd233971b7c81bf77e1fa4471280eb",
            "cuisines": [
                "Burgers",
                "Biryani",
                "American",
                "Snacks",
                "Fast Food"
            ],
            "tags": [],
            "costForTwo": 40000,
            "costForTwoString": "₹400 FOR TWO",
            "deliveryTime": 27,
            "minDeliveryTime": 27,
            "maxDeliveryTime": 27,
            "slaString": "27 MINS",
            "lastMileTravel": 0.6000000238418579,
            "slugs": {
                "restaurant": "kfc-embassy-tech-village-hobli-bengaluru-east-kadubeesanahalli",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "KFC RestaurantUnit No. 7 ground Floor  block D Situated  in Parcel 5 of embassy tech village hobli bengaluru east taluk Bangaluru dist. 560103",
            "locality": "Embassy Tech Village",
            "parentId": 547,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "40% off",
                "shortDescriptionList": [
                    {
                        "meta": "40% off | Use SWIGGYIT",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "40% off up to ₹80 | Use code SWIGGYIT",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "40% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use SWIGGYIT",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "40% off up to ₹80 | Use code SWIGGYIT",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 2800,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 2800,
                "message": "",
                "title": "Delivery Charge",
                "amount": "2800",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "0.6 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "251475",
                "deliveryTime": 27,
                "minDeliveryTime": 27,
                "maxDeliveryTime": 27,
                "lastMileTravel": 0.6000000238418579,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.0",
            "totalRatings": 100,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "237665",
            "name": "McDonald's",
            "uuid": "8cbff989-8226-4ee9-a07d-52f09a40747b",
            "city": "1",
            "area": "Kadubeesanahalli",
            "totalRatingsString": "500+ ratings",
            "cloudinaryImageId": "0e8f93a56b93e43d7627c2c21bc1106c",
            "cuisines": [
                "Burgers",
                "Beverages",
                "Cafe",
                "Desserts"
            ],
            "tags": [],
            "costForTwo": 40000,
            "costForTwoString": "₹400 FOR TWO",
            "deliveryTime": 24,
            "minDeliveryTime": 24,
            "maxDeliveryTime": 24,
            "slaString": "24 MINS",
            "lastMileTravel": 2.700000047683716,
            "slugs": {
                "restaurant": "mcdonalds-preatige-tech-park-kadubeesanahalli",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "Prestige Tech Park Rd, Kadubeesanahalli, Kadabeesanahalli, Bengaluru, Karnataka 560103",
            "locality": "Preatige Tech park",
            "parentId": 630,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "60% off",
                "shortDescriptionList": [
                    {
                        "meta": "60% off | Use WELCOMEBACK",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "60% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use WELCOMEBACK",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 2800,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 2800,
                "message": "",
                "title": "Delivery Charge",
                "amount": "2800",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "2.7 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "237665",
                "deliveryTime": 24,
                "minDeliveryTime": 24,
                "maxDeliveryTime": 24,
                "lastMileTravel": 2.700000047683716,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.2",
            "totalRatings": 500,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "628617",
            "name": "Bhartiya Jalpan",
            "uuid": "4b2817ff-a18a-4c6e-98fb-cbfbbf0105a7",
            "city": "1",
            "area": "Sarjapur Road",
            "totalRatingsString": "100+ ratings",
            "cloudinaryImageId": "ypmscb0ejbkzvbxgmoza",
            "cuisines": [
                "Desserts",
                "Beverages",
                "Chaat"
            ],
            "tags": [],
            "costForTwo": 45000,
            "costForTwoString": "₹450 FOR TWO",
            "deliveryTime": 35,
            "minDeliveryTime": 35,
            "maxDeliveryTime": 35,
            "slaString": "35 MINS",
            "lastMileTravel": 5,
            "slugs": {
                "restaurant": "bhartiya-jalpan-bellandur-sarjapur-bellandur-sarjapur",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "Khata No 1023/51, (old Sy No.51)  Kaikondarahalli Village, Varthur Hobli, Bangalore East Taluk, Bangalore -560103",
            "locality": "Varthur",
            "parentId": 7518,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "60% off",
                "shortDescriptionList": [
                    {
                        "meta": "60% off | Use WELCOMEBACK",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "60% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use WELCOMEBACK",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 4600,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 4600,
                "message": "",
                "title": "Delivery Charge",
                "amount": "4600",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=5717564~p=13~eid=00000185-f2fb-28ed-15e6-558900ba0d30",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "5 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "628617",
                "deliveryTime": 35,
                "minDeliveryTime": 35,
                "maxDeliveryTime": 35,
                "lastMileTravel": 5,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.0",
            "totalRatings": 100,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "261261",
            "name": "Hotel Empire",
            "uuid": "1737faa1-3303-4f10-9111-74193f23c459",
            "city": "1",
            "area": "Sarjapur Road",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "ue1tt2ujt2ybghd60bs0",
            "cuisines": [
                "North Indian",
                "Kebabs",
                "Biryani"
            ],
            "tags": [],
            "costForTwo": 45000,
            "costForTwoString": "₹450 FOR TWO",
            "deliveryTime": 33,
            "minDeliveryTime": 33,
            "maxDeliveryTime": 33,
            "slaString": "33 MINS",
            "lastMileTravel": 4.099999904632568,
            "slugs": {
                "restaurant": "hotel-empire-bellandur-sarjapur-bellandur-sarjapur",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "Countryside Layout, Rainbow Drive, Bengaluru, Karnataka 560035",
            "locality": "Countryside Layout",
            "parentId": 475,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "60% off",
                "shortDescriptionList": [
                    {
                        "meta": "60% off | Use WELCOMEBACK",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "60% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use WELCOMEBACK",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 4000,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 4000,
                "message": "",
                "title": "Delivery Charge",
                "amount": "4000",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "4 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "261261",
                "deliveryTime": 33,
                "minDeliveryTime": 33,
                "maxDeliveryTime": 33,
                "lastMileTravel": 4.099999904632568,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.1",
            "totalRatings": 1000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "210119",
            "name": "Sri Jayadurga Biryani",
            "uuid": "13927ae4-7437-4d24-959e-888585c704e8",
            "city": "1",
            "area": "Marathahalli",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "e5k8viofbtrxxo75lxdy",
            "cuisines": [
                "Biryani",
                "South Indian",
                "Andhra",
                "Hyderabadi",
                "Snacks"
            ],
            "tags": [],
            "costForTwo": 30000,
            "costForTwoString": "₹300 FOR TWO",
            "deliveryTime": 30,
            "minDeliveryTime": 30,
            "maxDeliveryTime": 30,
            "slaString": "30 MINS",
            "lastMileTravel": 4.400000095367432,
            "slugs": {
                "restaurant": "sri-jayadurga-biryani-marathahalli-marathahalli",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "Sri Jaya Durga Restaurant, OPP AMRUTHA BAKERY, LAKSHMI NARAYANA TEMPLE ROAD, MUNNEKOLALA, MARATHAHALLI, BANGALORE",
            "locality": "Munnekollal",
            "parentId": 14529,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "60% off",
                "shortDescriptionList": [
                    {
                        "meta": "60% off | Use WELCOMEBACK",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "60% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use WELCOMEBACK",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 4000,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 4000,
                "message": "",
                "title": "Delivery Charge",
                "amount": "4000",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "4.4 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "210119",
                "deliveryTime": 30,
                "minDeliveryTime": 30,
                "maxDeliveryTime": 30,
                "lastMileTravel": 4.400000095367432,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "3.7",
            "totalRatings": 1000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "548654",
            "name": "Sandwich 2 Poha",
            "uuid": "dd3c7800-3cf3-46fa-86d2-c11327bedbf5",
            "city": "1",
            "area": "Marathahalli",
            "totalRatingsString": "500+ ratings",
            "cloudinaryImageId": "uy9hnrrhljvqzjtnrar4",
            "cuisines": [
                "Healthy Food",
                "Indian",
                "Continental"
            ],
            "tags": [],
            "costForTwo": 25000,
            "costForTwoString": "₹250 FOR TWO",
            "deliveryTime": 35,
            "minDeliveryTime": 35,
            "maxDeliveryTime": 35,
            "slaString": "35 MINS",
            "lastMileTravel": 6.199999809265137,
            "slugs": {
                "restaurant": "sandwich-2-poha-marathahalli-marathahalli",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "1566, 3rd Main Rd, E Block, AECS Layout, Brookefield, Bengaluru, Karnataka 560037, India",
            "locality": "AECS Layout",
            "parentId": 329823,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "40% off",
                "shortDescriptionList": [
                    {
                        "meta": "40% off | Use GUILTFREEJAN",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "40% off up to ₹100 | Use code GUILTFREEJAN",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "40% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use GUILTFREEJAN",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "40% off up to ₹100 | Use code GUILTFREEJAN",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 5200,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 5200,
                "message": "",
                "title": "Delivery Charge",
                "amount": "5200",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=5788673~p=19~eid=00000185-f2fb-28ed-15e6-558b00ba131e",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "6.1 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "548654",
                "deliveryTime": 35,
                "minDeliveryTime": 35,
                "maxDeliveryTime": 35,
                "lastMileTravel": 6.199999809265137,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.2",
            "totalRatings": 500,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "444074",
            "name": "Magnolia Bakery",
            "uuid": "8fe485d2-f63a-4443-ac78-3acd3a547078",
            "city": "1",
            "area": "Bellandur",
            "totalRatingsString": "500+ ratings",
            "cloudinaryImageId": "6f0945b8b18d9f4241dd1cd9a70e23d7",
            "cuisines": [
                "Bakery",
                "Desserts",
                "Ice Cream"
            ],
            "tags": [],
            "costForTwo": 50000,
            "costForTwoString": "₹500 FOR TWO",
            "deliveryTime": 25,
            "minDeliveryTime": 25,
            "maxDeliveryTime": 25,
            "slaString": "25 MINS",
            "lastMileTravel": 3,
            "slugs": {
                "restaurant": "magnolia-bakery-bellandur-sarjapur-bellandur-sarjapur",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "Unit 26A - 1, The Bay, RMZ Ecoworld, Marathahalli - Sarjapur Outer Ring Rd, Bengaluru, Karnataka 560103",
            "locality": "RMZ Ecoworld",
            "parentId": 267303,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3400,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3400,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3400",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=5705328~p=22~eid=00000185-f2fb-28ed-15e6-558c00ba1626",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "3 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "444074",
                "deliveryTime": 25,
                "minDeliveryTime": 25,
                "maxDeliveryTime": 25,
                "lastMileTravel": 3,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.6",
            "totalRatings": 500,
            "new": false
        },
        "subtype": "basic"
    }
]

const Title = () => {
  return(
     <a href="/"> <img className="logo" alt="logo" src= {logo} /> </a>
  )
};
const NavBar = () => {
    return(<div className="nav-items">
                <ul>
                    <li> Home</li>
                    <li>
                        About</li>
                    <li>
                        Contact</li>
                    <li>Cart </li>
                </ul>
    </div>
    );
   
};
const HeaderLayout = () => {
    return (<>
        <div className="header">
            <Title />
            <NavBar/>
        </div>
       
    </>)
    
};
    
const RestaurantCard = ({name,cuisines, cloudinaryImageId, avgRating, lastMileTravelString}) => {
    return (
        <>
            <div className="restaurant-card">
                <img src={`${imgCdnURL}${cloudinaryImageId}`} alt="restaurant" />
                <span className="card-title">{name}</span>
                <span className="card-tags">{cuisines.join('')}</span>
                <span className="card-rating">{avgRating}</span>
                <h1 className="card-lastMile">{lastMileTravelString} minutes</h1>
            </div>
        </>
    )
}

const RestaurantList = () => {
  return (
    <div className="restaurant-list">
      {restaurantList.map((restaurant) => {
        return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
      })}
    </div>
  );
}

const Body = () => {
  return (
    <RestaurantList />
  );
};

const Footer = () => {
  return <h4>Footer</h4>;
};

const AppLayout = () => {
  return (
    <>
      <HeaderLayout />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

