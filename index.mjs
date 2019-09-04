
//import {area} from './components/Testmodule';    

//import {checkFunction} from './components/Test2'

//import {checkFunction} from './components/Test2'

//import {} from './'

const TestTest = require('./components/Testmodule');

const request = require('request-promise');

const cheerio = require('cheerio');

const url ='https://www.skincarisma.com/products/simple/kind-to-skin-micellar-water';

const url2 = 'https://www.skincarisma.com/brands?sym=T';

const urltest = 'http://jkorpela.fi/www/testel.html';

const urlProduct = 'https://www.skincarisma.com/brands/the-ordinary';
const urlProduct_2 = 'https://www.skincarisma.com/brands/the-ordinary?brand%5B%5D=The+Ordinary&page=2';
const urlProduct_3 = 'https://www.skincarisma.com/brands/the-ordinary?brand%5B%5D=The+Ordinary&page=3';


(async()=>{

    const response2 = await request(url2);

    const reponse_product = await request(urlProduct);
    const reponse_product_2 = await request(urlProduct_2);
    const reponse_product_3 = await request(urlProduct_3)


    let $ = cheerio.load(response2);

    let $Product = cheerio.load(reponse_product);
    let $Product_2 = cheerio.load(reponse_product_2);
    let $Product_3 = cheerio.load(reponse_product_3);


    const finalbrandList2 = $('.brand-link'); //here can process using REGEX

    const productAll_1 = $Product('.search-product-name');
    const productAll_2 = $Product_2('.search-product-name');
    const productAll_3 = $Product_3('.search-product-name');

    var productAllString_1 = productAll_1.toString();
    var productAllString_2 = productAll_2.toString();
    var productAllString_3 = productAll_3.toString();

    var this_ProductList_1 = [];
    var this_ProductList_2 = [];
    var this_ProductList_3 = [];

    var product_All_List_1 = productAllString_1.match(/"><p>(.*?)<\/p><\/div>/g); //regex
    var product_All_List_2 = productAllString_2.match(/"><p>(.*?)<\/p><\/div>/g); //regex
    var product_All_List_3 = productAllString_3.match(/"><p>(.*?)<\/p><\/div>/g); //regex

    // handle clinelle

    product_All_List_1.forEach(elementHere =>{

        var stringstringmofaka = elementHere.replace("\"><p>","").replace("</p></div>",""); 

        this_ProductList_1.push(stringstringmofaka);

    }); // page 1 

    
    product_All_List_2.forEach(elementHere =>{

        var stringstringmofaka = elementHere.replace("\"><p>","").replace("</p></div>",""); 

        this_ProductList_2.push(stringstringmofaka);

    }); // page 2

    
    product_All_List_3.forEach(elementHere =>{

        var stringstringmofaka = elementHere.replace("\"><p>","").replace("</p></div>",""); 

        this_ProductList_3.push(stringstringmofaka);

    }); // page 3

    var clineallproductList = this_ProductList_1.concat(this_ProductList_2);

    clineallproductList = clineallproductList.concat(this_ProductList_3);
    //

    
   

    /////// >>>>>>>>>>>>>>


    var size = finalbrandList2.length;
    console.log('size '+ size);

    var brands = finalbrandList2.toString();

    var brandsALL = brands.match(/">(.*?)<\/a/g); //regex

    var finallyBrand = [];
    
    brandsALL.forEach(element =>{

        var newStringhere = element.replace("</a","").replace("\">","");

        finallyBrand.push(newStringhere);
    });

    //console.log('finally >> '+ finallyBrand);

    /////////////////>>>>>>>>>>>>>>
    // const brandListProcess = $('.brand-link').text();

    // console.log('here >> '+brandListProcess);


    // // var mm = brandListProcess.match()
    // // console.log('here '+mm)
    /////////////////>>>>>>>>>>>>>>

    var dualWordsBrand=[];
    var singleBrand=[];

    finallyBrand.forEach(element=>{

        if(element.includes(" ")){

            dualWordsBrand.push(element);
        }else{

             singleBrand.push(element);
        }

    })

   // console.log('single >> '+singleBrand)
    //console.log('dual brand >> '+ dualWordsBrand)

    var twoLetterBrand = [];
    var thirdLetterBrand = [];
    
    var fourLetterBrand = [];
    var fiveLetterBrand = [];
    var sixLetterBrand = [];

    var sevenLetterBrand = [];
    var eightLetterBrand = [];
    var nineLetterBrand = [];
    var tenLetterBrand = [];
    
    var elevenLetterBrand = [];
    var twelveLetterBrand = [];

    var _13thLetterBrand = [];
    var _14thLetterBrand = [];
    var _15thLetterBrand = [];
    var _16thLetterBrand = [];
    var _17thLetterBrand = [];
    

    singleBrand.forEach((el,i)=>{

        
        //console.log(JSON.stringify(el).replace("\"","").replace("\"","").length)
        
         if(JSON.stringify(el).replace("\"","").replace("\"","").length==4){
            fourLetterBrand.push(el);
        }else if(JSON.stringify(el).replace("\"","").replace("\"","").length==5){

            fiveLetterBrand.push(el);
        }else if(JSON.stringify(el).replace("\"","").replace("\"","").length==6){

            sixLetterBrand.push(el);
        }else if(JSON.stringify(el).replace("\"","").replace("\"","").length==2){

            sixLetterBrand.push(el);
        }else if(JSON.stringify(el).replace("\"","").replace("\"","").length==3){

            thirdLetterBrand.push(el);
        }
        else if(JSON.stringify(el).replace("\"","").replace("\"","").length==7){

            sevenLetterBrand.push(el);
        }
        else if(JSON.stringify(el).replace("\"","").replace("\"","").length==8){

            eightLetterBrand.push(el);
        }
        else if(JSON.stringify(el).replace("\"","").replace("\"","").length==9){

            nineLetterBrand.push(el);
        }
        else if(JSON.stringify(el).replace("\"","").replace("\"","").length==10){

            tenLetterBrand.push(el);
        }
        else if(JSON.stringify(el).replace("\"","").replace("\"","").length==11){

            elevenLetterBrand.push(el);
        }
        else if(JSON.stringify(el).replace("\"","").replace("\"","").length==12){

            twelveLetterBrand.push(el);
        }
        else if(JSON.stringify(el).replace("\"","").replace("\"","").length==13){

            _13thLetterBrand.push(el);
        }
        else if(JSON.stringify(el).replace("\"","").replace("\"","").length==14){

            _14thLetterBrand.push(el);
        }
        else if(JSON.stringify(el).replace("\"","").replace("\"","").length==15){

            _15thLetterBrand.push(el);
        }
        else if(JSON.stringify(el).replace("\"","").replace("\"","").length==16){

            _16thLetterBrand.push(el);
            
        }
        else if(JSON.stringify(el).replace("\"","").replace("\"","").length==17){

            _17thLetterBrand.push(el);
            
        }
        

    });


    /////////////>> 2 or more words 

    var dualMoreWords_twoLetterBrand = [];
    var dualMoreWords_thirdLetterBrand = [];
    
    var dualMoreWords_fourLetterBrand = [];
    var dualMoreWords_fiveLetterBrand = [];
    var dualMoreWords_sixLetterBrand = [];

    var dualMoreWords_sevenLetterBrand = [];
    var dualMoreWords_eightLetterBrand = [];
    var dualMoreWords_nineLetterBrand = [];
    var dualMoreWords_tenLetterBrand = [];
    
    var dualMoreWords_elevenLetterBrand = [];
    var dualMoreWords_twelveLetterBrand = [];

    /// check leftout
    var dualMoreWords_13thLetterBrand = [];
    var dualMoreWords_14thLetterBrand = [];

    var dualMoreWords_15thLetterBrand = [];
    var dualMoreWords_16thLetterBrand = [];
    
    var dualMoreWords_17thLetterBrand = [];
    var dualMoreWords_18thLetterBrand = [];
    var dualMoreWords_19thLetterBrand = [];
    var dualMoreWords_20thLetterBrand = [];
    var dualMoreWords_21thLetterBrand = [];

    var dualMoreWords_22thLetterBrand = [];
    var dualMoreWords_23thLetterBrand = [];
    var dualMoreWords_24thLetterBrand = [];
    var dualMoreWords_25thLetterBrand = [];

    var dualMoreWords_26thLetterBrand = [];
    var dualMoreWords_27thLetterBrand = [];
    var dualMoreWords_28thLetterBrand = [];
    var dualMoreWords_29thLetterBrand = [];


    dualWordsBrand.forEach((el,i)=>{

        
        //console.log(JSON.stringify(el).replace("\"","").replace("\"","").length)
        
         if(JSON.stringify(el).replace("\"","").replace("\"","").length==4){
            dualMoreWords_fourLetterBrand.push(el);
        }else if(JSON.stringify(el).replace("\"","").replace("\"","").length==5){

            dualMoreWords_fiveLetterBrand.push(el);
        }else if(JSON.stringify(el).replace("\"","").replace("\"","").length==6){

            dualMoreWords_sixLetterBrand.push(el);
        }else if(JSON.stringify(el).replace("\"","").replace("\"","").length==2){

            dualMoreWords_sixLetterBrand.push(el);
        }else if(JSON.stringify(el).replace("\"","").replace("\"","").length==3){

            dualMoreWords_thirdLetterBrand.push(el);
        }
        else if(JSON.stringify(el).replace("\"","").replace("\"","").length==7){

            dualMoreWords_sevenLetterBrand.push(el);
        }
        else if(JSON.stringify(el).replace("\"","").replace("\"","").length==8){

            dualMoreWords_eightLetterBrand.push(el);
        }
        else if(JSON.stringify(el).replace("\"","").replace("\"","").length==9){

            dualMoreWords_nineLetterBrand.push(el);
        }
        else if(JSON.stringify(el).replace("\"","").replace("\"","").length==10){

            dualMoreWords_tenLetterBrand.push(el);
        }
        else if(JSON.stringify(el).replace("\"","").replace("\"","").length==11){

            dualMoreWords_elevenLetterBrand.push(el);
        }
        else if(JSON.stringify(el).replace("\"","").replace("\"","").length==12){

            dualMoreWords_twelveLetterBrand.push(el);
        }
        
        else if(JSON.stringify(el).replace("\"","").replace("\"","").length==13){

            dualMoreWords_13thLetterBrand.push(el);
            
        }
        else if(JSON.stringify(el).replace("\"","").replace("\"","").length==14){

            //dualMoreWords_13thLetterBrand.push(el);
            dualMoreWords_14thLetterBrand.push(el);
            
        }

        else if(JSON.stringify(el).replace("\"","").replace("\"","").length==15){

            //dualMoreWords_13thLetterBrand.push(el);
            
            dualMoreWords_15thLetterBrand.push(el);
        }
        else if(JSON.stringify(el).replace("\"","").replace("\"","").length==16){

            //dualMoreWords_13thLetterBrand.push(el);
            
            dualMoreWords_16thLetterBrand.push(el);
            
        }
        else if(JSON.stringify(el).replace("\"","").replace("\"","").length==17){

            //dualMoreWords_13thLetterBrand.push(el);
            
            dualMoreWords_17thLetterBrand.push(el);
        }
        else if(JSON.stringify(el).replace("\"","").replace("\"","").length==18){

            //dualMoreWords_13thLetterBrand.push(el);
            
            dualMoreWords_18thLetterBrand.push(el);
        }
        else if(JSON.stringify(el).replace("\"","").replace("\"","").length==19){

            //dualMoreWords_13thLetterBrand.push(el);
            
            dualMoreWords_19thLetterBrand.push(el);
            
        }
        else if(JSON.stringify(el).replace("\"","").replace("\"","").length==20){

            //dualMoreWords_13thLetterBrand.push(el);
            
            dualMoreWords_20thLetterBrand.push(el);
        }
        else if(JSON.stringify(el).replace("\"","").replace("\"","").length==21){

            //dualMoreWords_13thLetterBrand.push(el);
            
            dualMoreWords_21thLetterBrand.push(el);
        }
        else if(JSON.stringify(el).replace("\"","").replace("\"","").length==22){

            //dualMoreWords_13thLetterBrand.push(el);
            
            dualMoreWords_22thLetterBrand.push(el);
        }
        else if(JSON.stringify(el).replace("\"","").replace("\"","").length==23){

            //dualMoreWords_13thLetterBrand.push(el);
            
            dualMoreWords_23thLetterBrand.push(el);
        }
        else if(JSON.stringify(el).replace("\"","").replace("\"","").length==24){

            //dualMoreWords_13thLetterBrand.push(el);
            
            dualMoreWords_24thLetterBrand.push(el);
        }else if(JSON.stringify(el).replace("\"","").replace("\"","").length==25){

            //dualMoreWords_13thLetterBrand.push(el);
            
            dualMoreWords_25thLetterBrand.push(el);
        }
        else if(JSON.stringify(el).replace("\"","").replace("\"","").length==26){

            //dualMoreWords_13thLetterBrand.push(el);
            
            dualMoreWords_26thLetterBrand.push(el);
        }
        else if(JSON.stringify(el).replace("\"","").replace("\"","").length==27){

            //dualMoreWords_13thLetterBrand.push(el);
            
            dualMoreWords_27thLetterBrand.push(el);
        }
        else if(JSON.stringify(el).replace("\"","").replace("\"","").length==28){

            //dualMoreWords_13thLetterBrand.push(el);
            
            dualMoreWords_28thLetterBrand.push(el);
            
        }
        else if(JSON.stringify(el).replace("\"","").replace("\"","").length==29){

            //dualMoreWords_13thLetterBrand.push(el);
            
            dualMoreWords_29thLetterBrand.push(el);
            
        }

    });

    console.log('finish')

    // console.log('4 letter brands >> '+ fourLetterBrand)
    // console.log('5 letter brands >> '+ fiveLetterBrand)
    // console.log('6 letter brands >> '+ sixLetterBrand)

    var sizeFinal = twoLetterBrand.length+ thirdLetterBrand.length+fourLetterBrand.length+ fiveLetterBrand.length+ sixLetterBrand.length+sevenLetterBrand.length;
     
    sizeFinal = sizeFinal+ eightLetterBrand.length+ nineLetterBrand.length+ tenLetterBrand.length+elevenLetterBrand.length+twelveLetterBrand.length;

     sizeFinal = sizeFinal+ dualMoreWords_twoLetterBrand.length+  dualMoreWords_thirdLetterBrand.length+ dualMoreWords_fourLetterBrand.length;

     sizeFinal= sizeFinal+ dualMoreWords_fiveLetterBrand.length+ dualMoreWords_sixLetterBrand.length+ dualMoreWords_sevenLetterBrand.length+dualMoreWords_eightLetterBrand.length;

     sizeFinal = sizeFinal+ dualMoreWords_nineLetterBrand.length + dualMoreWords_tenLetterBrand.length+ dualMoreWords_elevenLetterBrand.length+ dualMoreWords_twelveLetterBrand.length;

     sizeFinal = sizeFinal + dualMoreWords_13thLetterBrand.length + dualMoreWords_14thLetterBrand.length + dualMoreWords_15thLetterBrand.length + dualMoreWords_16thLetterBrand.length;

     sizeFinal = sizeFinal + dualMoreWords_17thLetterBrand.length+ dualMoreWords_18thLetterBrand.length + dualMoreWords_19thLetterBrand.length + dualMoreWords_20thLetterBrand.length + dualMoreWords_21thLetterBrand.length;

     sizeFinal = sizeFinal + _13thLetterBrand.length + _14thLetterBrand.length + _15thLetterBrand.length;

     

     sizeFinal = sizeFinal + dualMoreWords_22thLetterBrand.length+ dualMoreWords_23thLetterBrand.length+ dualMoreWords_24thLetterBrand.length+ dualMoreWords_25thLetterBrand.length;

     sizeFinal = sizeFinal + dualMoreWords_26thLetterBrand.length +  dualMoreWords_27thLetterBrand.length + dualMoreWords_28thLetterBrand.length + dualMoreWords_29thLetterBrand.length; 

    console.log('check if all added up >>> '+ sizeFinal );

    var leftOut = dualMoreWords_25thLetterBrand.length;

    console.log('  ?????????? ?>> ?????????? ');
    console.log(' ?????????? ?>> ?????????? ');
    console.log('     ');

    console.log('3 letter brands >> '+ thirdLetterBrand)
    console.log('     ');
    console.log('4 letter brands >> '+ fourLetterBrand)
    console.log('     ');
    console.log('5 letter brands >> '+ fiveLetterBrand)
    console.log('     ');
    console.log('6 letter brands >> '+ sixLetterBrand)
    console.log('     ');
    console.log('7 letter brands >> '+ sevenLetterBrand)
    console.log('     ');
    console.log('8 letter brands >> '+ eightLetterBrand)
    console.log('     ');
    console.log('9 letter brands >> '+ nineLetterBrand)
    console.log('     ');
    console.log('10 letter brands >> '+ tenLetterBrand)
    console.log('     ');
    console.log('11 letter brands >> '+ elevenLetterBrand)
    console.log('     ');
    console.log('12 letter brands >> '+ twelveLetterBrand)
    console.log('     ');
    console.log('13 letter brands >> '+ _13thLetterBrand)
    console.log('     ');
    console.log('14 letter brands >> '+ _14thLetterBrand)
    console.log('     ');
    console.log('15 letter brands >> '+ _15thLetterBrand)
    console.log('     ');
    console.log('16 letter brands >> '+ _16thLetterBrand)
    console.log('     ');
    console.log('17 letter brands >> '+ _17thLetterBrand)
    console.log('     ');
    
    // console.log('5 letter brands >> '+ fiveLetterBrand)
    // console.log('6 letter brands >> '+ sixLetterBrand)


    

//    testloop();

    //area();

    const testhere = new TestTest;

    testhere.makeTest();

    //var allcosrxstring = cosrxProductList.join(" ")

    //cosrxProductList = [...]

    //cosrxProductList= cosrxProductList.concat(cosrxProductList_2);

   

    //import {chec} from './components/Test2'
    //checkFunction();

    console.log('\n\n ALL CLINELLE >> ', clineallproductList.toString()+ '\n\n');

})();
