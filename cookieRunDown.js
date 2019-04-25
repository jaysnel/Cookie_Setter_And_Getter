<script>
  	jQuery(document).ready(function() {
  		      //Setting The Value Of The Cookie
      var this_cookies_value = "_j_s_4/25/2019";
      var current_web_url = window.location.href;

      //Checks page on load to see if this_cookies_value already exists
      function checkForOurCookiesValue() {
      var allTheCookies = document.cookie;
      var _this_Host_Name_ = '"' + window.location.hostname + '"';
      var _this_Path_Name = window.location.pathname;

      console.log(allTheCookies);

      if(allTheCookies.includes("_my_domain_cookie")) {
        jQuery("#modal_popup").hide();
      } else {
        console.log("No Cookie Set")
      };

      }
      checkForOurCookiesValue();


      //If cookie does not exist, this script will run once users age is verified correctly
      function createCookie(name,value,days) {

      if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
        }
        else var expires = "";
        document.cookie = name+"="+value+expires+"; path=/";
        return true;
        }
      //Creating the cookie
      jQuery(".css-only-modal-btn").on("click", function() {
          createCookie("_my_domain_cookie", this_cookies_value, 1);
            console.log("Cookie Set");
      });
});
</script> 
