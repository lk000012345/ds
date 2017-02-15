$(document).ready(function(){
    var shopClass=$('.shopClass');
    var navSidebar=$('.navSidebar');
    var navShow=$('.navShow');
    var b=$('.nav .navSidebar dl');
// 商品分类列表
    shopClass.on('mouseout',function(){
        b.removeClass('navSidebar_active')
    })
    $('.popup').on('mouseout',function(){;
        navShow.hide();
        b.removeClass('navSidebar_active')
    })
    $('.popup>div').on('mouseover',function(){
       var m=$(this).index();
        sw(m) 
    })
    b.on('mouseover',function(){
        var m=$(this).index();
        sw(m);
    })
    $('.navSidebar').on('mouseout',function(){
        navShow.hide();
        b.removeClass('navSidebar_active');
    })
    function sw(curIndex){
        b.eq(curIndex).addClass('navSidebar_active').siblings().removeClass('navSidebar_active');
        $('.navShow').eq(curIndex).show().siblings().hide();
    }
    // 焦点轮播图
    var bannerBig=$('.banner_pic_big li');//b
    var numBig=$('.banner_pic_big .pic_num a');//a
    var bannerSm1=$('.banner_pic_sm1 li');
    var bannerSm2=$('.banner_pic_sm2 li');
    var bannerSm3=$('.banner_pic_sm3 li');
    var bannerSm4=$('.banner_pic_sm4 li');
    var bannerSm5=$('.banner_pic_sm5 li');
    var numSm1=$('.banner_pic_sm1 .pic_num a')
    var numSm2=$('.banner_pic_sm2 .pic_num a')
    var numSm3=$('.banner_pic_sm3 .pic_num a')
    var numSm4=$('.banner_pic_sm4 .pic_num a')
    var numSm5=$('.banner_pic_sm5 .pic_num a')
    var pic=$('.pic')
    autoBanner(numBig,bannerBig,$('.pic0'),-811);
    autoBanner(numSm1,bannerSm1,$('.pic1'),-190);
    autoBanner(numSm2,bannerSm2,$('.pic2'),-190);
    autoBanner(numSm3,bannerSm3,$('.pic3'),-190);
    autoBanner(numSm4,bannerSm4,$('.pic4'),-190);
    autoBanner(numSm5,bannerSm5,$('.pic5'),-190);
    function autoBanner(a,b,pic,x){
        // 自动轮播
        var index=0;
        // 开始时清除定时器
        if(timer){
            clearInterval(timer);
            timer=null;
        }
        var timer=setInterval(d,2000)
        // 鼠标移入停止播放
        a.on('mouseover',function(){
            clearInterval(timer);
            pic.stop(true)
            timer=null;
            var m=$(this).index();
            c(m);
        })
        a.on('mouseover',function(){
            clearInterval(timer);
        })
        // 鼠标移走继续播放
        b.on('mouseout',function(){
            index=$(this).index();
            clearInterval(timer);
            timer=null;
            timer=setInterval(d,2000)
        })
        a.on('mouseout',function(){
            index=$(this).index();
            clearInterval(timer);
            timer=null;
            timer=setInterval(d,2000)
        })

        function c(curIndex){
            pic.animate({marginLeft:x*curIndex+'px'});
            a.eq(curIndex).addClass('pic_num_active').siblings().removeClass('pic_num_active');
            //console.log(curIndex)
        }
        function d(){
            if (index>=2) {index=-1};
            index++;
            c(index);     
        }
    }
    // 导航条
    
   $(window).scroll(function(){
        var top=$(document).scrollTop();
        // console.log(top)
        var items=$('.item')
        var menu=$('#menu')
        var currentId="" //当前楼层的id
        items.each(function(){
            var m=$(this);
            var itemsTop=m.offset().top; //每个楼层的相对位移
             //console.log(itemsTop)
            if (top>itemsTop-200) {
                currentId='.'+m.attr('id') 
            }else{return false}
        })
        var currentLink=$('.ac');
        if(currentId&&currentLink.attr('href')!=currentId){
            currentLink.removeClass('ac');
            menu.find(currentId).addClass('ac');
        }
    })
        var top=$(document).scrollTop();
        // console.log(top)
        var items=$('.item')
        var menu=$('#menu')
        $('#menu ul li').click(function(){
            var t=$(this).index();
            var h=items.eq(t).offset().top;
            console.log(t);
            console.log(h);
            $('body').animate({scrollTop:h},300);
        })
    //回到顶部
     $('#btn').on('click',function(){
            $('body').animate({scrollTop:0},300);
            //console.log($('body').scrollTop())
        })
    $(document).scroll(function(){
        //console.log($('body').scrollTop())
        if($('body').scrollTop()>500){
            $('#menu #btn').show()
            $('#menu #btn').css({'display':'block'})
        }else{
            $('#btn').hide()
        }
    })
})
