  function initMap() {
    var place = {
      lat: 9.9686197, lng: 76.3144636};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 18,
      center: place
    }
                                 );
    var marker = new google.maps.Marker({
      position: place,
      mapTypeId: 'satellite',
      title: 'Log & Planks',
      map: map
    }
                                       );
  }





function CommonFunc(name,num)  {
    
  var id = '#'+name;
  $(id).modal('hide');
  $(id).modal('show');
  $(id).carousel({ pause: 'true' });
  $(id).carousel('next');
  $(id).carousel(num);
  $(id).carousel({ pause: 'false' });
  
}




 function antiqueBtn() {
    $("#antiqueButto").click();
 }


 function vicotrianBtn() {
    $("#victoriaButto").click();
 }


 function modernBtn() {
    $("#modernButto").click();
 }


 function contemBtn() {
    $("#contemporyButto").click();
 }


 function victoria(){
     var mainDiv = document.getElementById('productlookimg');
     mainDiv.children[0].src = "images/impo2.jpg";
     document.getElementById('modernMainDiv').style.display='none';
      document.getElementById('contemporyMainDiv').style.display='none';
      document.getElementById('adiqueMainDiv').style.display='none';
      document.getElementById('victoiamaindiv').style.display='block';
   }

   function modern(){
     var mainDiv = document.getElementById('productlookimg');
     mainDiv.children[0].src = "images/impo3.jpg";
     document.getElementById('modernMainDiv').style.display='block';
    document.getElementById('contemporyMainDiv').style.display='none';
    document.getElementById('adiqueMainDiv').style.display='none';
    document.getElementById('victoiamaindiv').style.display='none';
      }

  function antique(){

     var mainDiv = document.getElementById('productlookimg');
     mainDiv.children[0].src = "images/impo1.jpg";
     document.getElementById('modernMainDiv').style.display='none';
     document.getElementById('contemporyMainDiv').style.display='none';
     document.getElementById('adiqueMainDiv').style.display='block';
     document.getElementById('victoiamaindiv').style.display='none';
   }
   function contempory(){
     var mainDiv = document.getElementById('productlookimg');
     mainDiv.children[0].src = "images/impo4.jpg";
     document.getElementById('modernMainDiv').style.display='none';
      document.getElementById('contemporyMainDiv').style.display='block';
      document.getElementById('adiqueMainDiv').style.display='none';
      document.getElementById('victoiamaindiv').style.display='none';
   }

  function emailabout(){
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var comments = document.getElementById('comments').value;
      var re = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
    var t= re.test(email)
      if(t){
         

      var datas ={"name": name,"email":email,"comments":comments,"subject":comments}

      sendMail(datas)
      }
      else{

        toastr.info('Email is not valid');
      }
   }
   function postdata(){
    var email = document.getElementById('postemail').value;
    var name = document.getElementById('postname').value;
    var email = document.getElementById('postemail').value;
    var comments = document.getElementById('postcomment').value;
    var subject = document.getElementById('postsubject').value;
    var re = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
    var t= re.test(email)
      if(t){
         

      var datas ={"name": name,"email":email,"comments":comments,"subject":subject}

      sendMail(datas)
      }
      else{

        toastr.info('Email is not valid');
      }
     
   }
  $(document).ready(function() {
    //Set the carousel options
      document.getElementById('name').value = "";
       document.getElementById('email').value ="";
       document.getElementById('comments').value="";
       document.getElementById('postname').value="";
       document.getElementById('postemail').value="";
       document.getElementById('postcomment').value="";
       document.getElementById('postsubject').value="";
    
  });
  function sendMail(content){

    $.ajax({
        url : "http://localhost:3000/sendmail",
        type : "post",
        crossOrigin: true,
        data : content,
        success : function(response) {
      
         if(response == "send"){
          document.getElementById('name').value = "";
          document.getElementById('email').value ="";
          document.getElementById('comments').value="";
          document.getElementById('postname').value="";
          document.getElementById('postemail').value="";
          document.getElementById('postcomment').value="";
          document.getElementById('postsubject').value="";
          toastr.success('Your Mail is send');
         }
         else{

          toastr.error('Try again!!');
         }
         
        },
        error: function() {
          toastr.error('some Problem in server!! Try again!!');
        }
    });
  }
