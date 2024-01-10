import {createSlice} from '@reduxjs/toolkit'
import Rectangle_76 from '../../assets/productsimg/Rectangle 76.svg'
import Rectangle_77 from '../../assets/productsimg/Rectangle 77.svg'
import Rectangle_78 from '../../assets/productsimg/Rectangle 78.svg'
import Rectangle_79 from '../../assets/productsimg/Rectangle 79.svg'
import Rectangle_80 from '../../assets/productsimg/Rectangle 80.svg'
import Rectangle_81 from '../../assets/productsimg/Rectangle 81.svg'
import Rectangle_82 from '../../assets/productsimg/Rectangle 82.svg'
import Rectangle_83 from '../../assets/productsimg/Rectangle 83.svg'
import Rectangle_84 from '../../assets/productsimg/Rectangle 84.svg'
import Rectangle_85 from '../../assets/productsimg/Rectangle 85.svg'
import Rectangle_86 from '../../assets/productsimg/Rectangle 86.svg'
import Rectangle_87 from '../../assets/productsimg/Rectangle 87.svg'
import Rectangle_88 from '../../assets/productsimg/Rectangle 88.svg'
import Rectangle_89 from '../../assets/productsimg/Rectangle 89.svg'
import Rectangle_90 from '../../assets/productsimg/Rectangle 90.svg'
import Rectangle_91 from '../../assets/productsimg/Rectangle 91.svg'
import Rectangle_13 from '../../assets/productsimg/Rectangle 13.svg'
import Rectangle_14 from '../../assets/productsimg/Rectangle 14.svg'
import Rectangle_15 from '../../assets/productsimg/Rectangle 15.svg'
import Rectangle_16 from '../../assets/productsimg/Rectangle 16.svg'

const Products = createSlice({
    name:"products_data",
    initialState:{
        products:[
            {
                id:1001,
                img:[Rectangle_82,Rectangle_13,Rectangle_14,Rectangle_15,Rectangle_16],
                brand:'Rashmi Divine Solutions',
                Scent: 'Floral',
                Availability: 2,
                title:'Lavender Dhoop Cone Sticks Pack of 100-Piece/Jar by Rashmi Divine',
                key_info:{
                    p1:'Lavender Dhoop sticks activate your senses and relax the nerves, making you less anxious. They also hold the power to cleanse the air.',
                    p2:'Lavender Crafted out of the finest quality ingredients, this leaves a magnificent and alluring fragrance and adds more to your ‘spiritual time',
                    p3:`Lavender Dhoop sticks are Charcoal Free Dhoop Sticks with soothing fragrances which don't cause eye irritation and headache`
                },
                desc:`Dhoop incence cone made from natual hurbs and scented.Long lasting enthralling dhoop batti for regular use - encouraging and cheering dhoop incense cones. Use dhoop bati for offering your prayers or while meditating or relaxing. It will unquestionably boost up your confidence, create encouraging environment and purify the atmosphere while spreading the lingering aroma all around. Use it every morning while doing prayers, while meditating or exercising. It's one of the best incense cones that spread mesmerizing fragrance all around. Simply relax and have the time of your lives by getting these incense cones. can we use for spiritual and meditation purpose. Its great fragrance and long lasting effect. Its heavenly aroma encourages your soul and thoughts to be pure and beautiful. For uplifting and purifying the ambience.`,
                mrp: 8.00,
                disc_price: 4.05,
                rating:4,
                product_info:{
                    pack_of:100,
                    about:'Dhoop incence cone made from natual hurbs and scented.Long lasting enthralling dhoop batti for regular use - encouraging and cheering dhoop incense cones.'
                },
                reviews:{

                },
                display_info:{
                    title:'Lavender INCENSE CONES',
                    desc:'4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use'
                }      
            }
        ]
    }
})