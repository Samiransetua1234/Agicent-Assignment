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
import Rectangle_13 from '../../assets/productsimg/image 10.svg'
import Rectangle_14 from '../../assets/productsimg/image 11.svg'
import Rectangle_15 from '../../assets/productsimg/image 12.svg'
import Rectangle_16 from '../../assets/productsimg/image 13.svg'

const Products = createSlice({
    name:"products_data",
    initialState:{
        products:[
            {
                id:1001,
                img:Rectangle_76,
                title:'DHOOP INCENSE CONES',
                desc:'4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use',
                disc_price: 2.05,
                rating:4,
            },
            {
                id:1002,
                img:Rectangle_77,
                title:'HEM Incense',
                desc:'4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use',
                disc_price: 1.05,
                rating:4,
            },
            {
                id:1003,
                img:Rectangle_78,
                title:'Mystic Temple Incense',
                desc:'4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use',
                disc_price: 2.75,
                rating:4,
            },
            {
                id:1004,
                img:Rectangle_79,
                title:'SAC Incense',
                desc:'4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use',
                disc_price: 5.05,
                rating:4,
            },
            {
                id:1005,
                img:Rectangle_80,
                title:'Frankincense and Myrrh',
                desc:'4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use',
                disc_price: 3.05,
                rating:4,
            },
            {
                id:1006,
                img:Rectangle_81,
                title:'Eucalyptus INCENSE CONES',
                desc:'4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use',
                disc_price: 10.05,
                rating:4,
            },
            {
                id:1007,
                img:Rectangle_82,
                title:'Lavender INCENSE CONES',
                desc:'4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use',
                disc_price: 4.05,
                rating:4,
            },
            {
                id:1008,
                img:Rectangle_83,
                title:'Sage INCENSE CONES',
                desc:'4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use',
                disc_price: 0.75,
                rating:4,
            },
            {
                id:1009,
                img:Rectangle_84,
                title:'Frankincense and Myrrh',
                desc:'4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use',
                disc_price: 3.05,
                rating:4,
            },
            {
                id:1010,
                img:Rectangle_85,
                title:'Eucalyptus INCENSE CONES',
                desc:'4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use',
                disc_price: 10.05,
                rating:4,
            },
            {
                id:1011,
                img:Rectangle_86,
                title:'Orange Blossom INCENSE CONES',
                desc:'4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use',
                disc_price: 4.05,
                rating:4,
            },
            {
                id:1012,
                img:Rectangle_87,
                title:'Musk INCENSE CONES',
                desc:'4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use',
                disc_price: 0.75,
                rating:4,
            },
            {
                id:1013,
                img:Rectangle_88,
                title:'Bergamot and Myrrh',
                desc:'4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use',
                disc_price: 3.05,
                rating:4,
            },
            {
                id:1014,
                img:Rectangle_89,
                title:'Gardenia INCENSE CONES',
                desc:'4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use',
                disc_price: 10.05,
                rating:4,
            },
            {
                id:1015,
                img:Rectangle_90,
                title:'Yerba Santa INCENSE CONES',
                desc:'4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use',
                disc_price: 4.05,
                rating:4,
            },
            {
                id:1016,
                img:Rectangle_91,
                title:'Sage INCENSE CONES',
                desc:'4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use',
                disc_price: 0.75,
                rating:4,
            },
        ],

        product_details:{
            id:1001,
            img:[Rectangle_82,Rectangle_13,Rectangle_14,Rectangle_15,Rectangle_16],
            brand:'Rashmi Divine Solutions',
            scent: 'Floral',
            availability: 2,
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
                user1:{
                    name:'User A',
                    desc:'Awsome product great fragrance.'
                },
                user2:{
                    name:'User B',
                    desc:'Awsome product great fragrance.'
                },
                user3:{
                    name:'User C',
                    desc:'Awsome product great fragrance.'
                }
            },      
        }
    }
})

export default Products.reducer