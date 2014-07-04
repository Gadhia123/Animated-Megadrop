/*
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
*/
/* 
    Created on : 04-Mar-2014, 16:18:40
    Author     : dansmith
*/

//Vars

* { -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; padding: 0; margin: 0;}
body { font-size: 100%;}
a { color: #666; text-decoration: none;}


.nav {
    
background:$megadrop-background;
width: 100%;
margin: 20px auto;
height: 63px;
        
&.shadow{
    -webkit-box-shadow:inset 0 0 12px 0 darken($megadrop-background,30%);
box-shadow:inset 0 0 12px 0 darken($megadrop-background,30%);
}


    li{ 
    list-style: none;       
         
          &.nav-right{
          float: right;
          }
    }

    
   > li { padding: 0; float: left; position: relative; 
          > a {
                float: left;
             
                color: #fff;
                font-size: 16px;
                text-decoration: none;
                line-height: 63px;
                padding: 0 14px; 
                margin-right:1px;
                height: 63px;
                text-shadow: -1px 1px 0 darken($megadrop-background,30%);
                
                &:last-of-type{
                    margin-right:0;
                }
           }
           > div {
                position: absolute;
                left: 0;
                top: 63px;
                display: none;
                background: #fff;
                border-bottom:2px solid lighten($megadrop-background,30%);;
                padding: 10px 10px;
                box-shadow: 0 2px 3px rgba(0,0,0,0.1);
                overflow: hidden;
                z-index: 99999;
                
                p { color: #666; }
                .right { right: 0; left: auto }
           }
   &:hover{
       > a { 
           
           
           //border-top:1px solid #FFFFFF; 
           background:  $megadrop-background-hover;
           color:   darken($megadrop-background-hover,100%) ;
           text-shadow: -1px 1px 0 #FFFFFF;
           
            $experimental-support-for-svg: true;
            @include background-image(linear-gradient(#f8f8f8, #ffffff));  
            @include box-shadow(0 -1px 8px 0 rgba(0,0,0,0.2));
           
       }
           
       > div { }
   }
   &:first-child{
       > a { border-left: 0; }
   }
   &:last-child{
       > a { border-right: 0; }
   }
   } 

}

.nav.nojs{
    
    > li { 
       
      
    &:hover{
       > a { 
           
           
           //border-top:1px solid #FFFFFF; 
           background:  #f8f8f8;
           color:   #222;
           text-shadow: -1px 1px 0 #FFFFFF;
           
            $experimental-support-for-svg: true;
            @include background-image(linear-gradient(#f8f8f8, #ffffff));  
            @include box-shadow(0 -1px 8px 0 rgba(0,0,0,0.2));
           
       }          
       > div { }
       
   
   div[class^="container-"]{
   display:block !important; 
   @include opacity(1);
   }
       
   }
}
}

.navvisfix{
    visibility:visible !important;
    opacity:1 !important;
    display:block !important;
}

/* MEGA DROP DOWN */
//Create containers 1  to Max Col Number
@for $container_i from 1 through $megamenu-dropdown-max-cols {
    .container-#{$container_i}{       
        width: $megadrop-dropdown-column-width * $container_i;
        
     
                
        //Define cols 1 to (current container number)
        @for $col_i from 1 through $container_i{        
            .col#{$col_i}{                
            margin:0; padding:0;
            float:left;
            width: ((100 / $container_i) *  $col_i) +0%; 
             
            }            
        }          
    }    
}