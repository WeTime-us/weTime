
const Header = React.createClass({
   render:function () {
       return <div>
           <div className="row">

               <div className="col-md-3 logo">
                   WeTime
               </div>

               <div className="col-md-6">
                   <form className="form-search">
                       <input className="form-control" type="text"/>
                   </form>
               </div>

               <div className="col-md-3 ">
                   <a href="#">登录</a>
                   <span>|</span>
                   <a href="#">注册</a>
               </div>

           </div>

           <div className="row">
               <div className="col-md-2"></div>
               <div className="col-md-8">
                   <div className="nav">
                       <a href="http://www.baidu.com"> 首页 </a>
                       <a href="./page/navPage.html"> 演唱会 </a>
                       <a> 音乐会 </a>
                       <a> 电影 </a>
                       <a> 体育赛事 </a>
                       <a> 度假旅游 </a>
                   </ div >
               </ div >
               <div className="col-md-2"></ div >
           </ div >
       </div>
   }
});

ReactDOM.render(<Header />, document.getElementsByClassName('header')[0]);