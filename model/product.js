const products=
{
    fakeDB:[],

    init()
    {

        this.fakeDB.push({title:'XPS 13',description:`Our smallest 13-inch laptops feature a virtually 
        borderless InfinityEdge display and up to 10th gen Intel® processors. 
        Touch, silver, rose gold and frost options available
        `,price:`1349.99`});
    
         this. fakeDB.push({title:'XPS 15',description:`Powerhouse performance with the latest processors and NVIDIA 
        graphics paired with a stunning 4K Ultra HD display. `,price:`1749.99`});
    
        this.fakeDB.push({title:'XPS 17',description:`XPS 17 is designed to keep you entertained for more than 9 hours 
        with a 9-cell battery upgrade.`,price:`1949.99`});

    },

    getAllProducts()
    {

        return this.fakeDB;
    }

}

products.init();
module.exports=products;