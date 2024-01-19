import Image from 'next/image'
import { Trans } from 'next-i18next'

<div id="content">
  <div class="container" style="padding-top: 5%;">
  <br>
  <div id="readme_md" style="padding: 0px;">
  <!-- <center><a href="https://cdn69.afilmyzone.workers.dev"><img src="https://i.ibb.co/9wBQp5Z/20221209-152126.png" alt="AfilmyZone" border="0" height="auto" width="30%" style="margin-top: auto;"></a><br> -->
  <center><b>AfilmyZone এ আপনাকে স্বাগতম</b><br><a href="https://www.afilmyzone.workers.dev"><img src="https://i.ibb.co/9wBQp5Z/20221209-152126.png" alt="AfilmyZone" border="0" height="100px" width="100%" style="margin-top: 10px;"></a><br><b>"বিনোদন হোক ঝামেলাহীন"</b><br><br></center>
  <div class="hhsearch">
  <form class="" method="get" action="https://cdn69.afilmyzone.workers.dev/0:search">
  <input type="search" name="q" class="form-control rounded" placeholder="সার্চ করে খুঁজে নিন আপনার কাক্ষিত ফাইলটি...." value="" aria-label="Search" aria-describedby="search-addon" required=""><br>
  <center><button type="submit" class="btn btn-success">Search Files</button></center>
  </div>
   <div class="menu-label" style="text-align:center;margin:50px 10px 0 10px;">
             <p style="font-size:15"><b><a href='https://t.me/afilmyzone1' target='_blank'>
  <input type='button' style='padding-left:10px;padding-top:10px;padding-right:10px;padding-bottom:10px;margin-left:10px;margin-top:10px;margin-right:10px;margin-bottom:10px;background-color:#41beec;color:#000000;border-left-width:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-color:#d5d5d5;border-radius:100px;cursor:pointer' value='Join us on Telegram' onMouseOver=this.style.backgroundColor='#0796ca';this.style.color='#ffffff';this.style.borderColor='#d5d5d5' onMouseOut=this.style.backgroundColor='#41beec';this.style.color='#000000';this.style.borderColor='#d5d5d5' />
  </a></b></p>
   <p style="font-size:15px">Managed and Indexed by <a href="https://t.me/afilmyzone1/2075">AfilmyZone</a>, <a onclick="myFunction()">Learn More</a>.</p>
                       <p id="footer" style="display:none;font-size:15px"></p><p style="font-size:12px">কোনো মুভি খুঁজে না পেলে, আমাদের টেলিগ্রামে মুভি রিকুয়েষ্ট দিন। আপনার রিকুয়েষ্ট করা মুভিটি আমরা আপলোড করে আপনাকে টেলিগ্রাম জানিয়ে দিবো। ধন্যবাদ</br><br><a>
             <p id="footer" style="display:none;font-size:15px">All Content is Indexed from Various Sites around the globe, proxied using Cloudflare Technology and then Served to authorized users only. The data is not stored on Afilmyzone.com domain or its servers, the website redirects users to third party URLs at the end of each page. This is just an Index, much like how Google and Search Engine Works.</p><p style="font-size:10px">Copyright © 2022 — All files, code and anything else found, are the property of their respective owners.<br><br><a href="//www.dmca.com/Protection/Status.aspx?ID=69cd1006-50de-43ec-84e8-dec048341467" title="DMCA.com Protection Status" class="dmca-badge"> <img src ="https://images.dmca.com/Badges/dmca_protected_16_120.png?ID=69cd1006-50de-43ec-84e8-dec048341467"  alt="DMCA.com Protection Status" /></a>  <script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"> </script><br><a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fwww.afilmyzone.xyz.workers.dev&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false"/></a>
  </div>
  </div>
  </div>
  </div>
  </div>
  <!-- Messenger Chat plugin Code -->
      <div id="fb-root"></div>
      <!-- Your Chat plugin code -->
      <div id="fb-customer-chat" class="fb-customerchat">
      </div>
  
      <script>
        var chatbox = document.getElementById('fb-customer-chat');
        chatbox.setAttribute("page_id", "");
        chatbox.setAttribute("attribution", "biz_inbox");
      </script>
  
      <!-- Your SDK code -->
      <script>
        window.fbAsyncInit = function() {
          FB.init({
            xfbml            : true,
            version          : 'v14.0'
          });
        };
  
        (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
      </script>
      <br>
      <br>
      <br>
      <br>
  
  </body>
  <script>
  function myFunction() {
   var x = document.getElementById("footer");
   if (x.style.display === "none") {
   x.style.display = "block";
   } else {
   x.style.display = "none";
   }
  }	
  </script>
  </html>
  </body>
        </header>
        <div>
           <div class="modal fade" id="SearchModel" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="SearchModelLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                 <div class="modal-content">
                    <div class="modal-header">
                       <h5 class="modal-title" id="SearchModelLabel"></h5>
                       <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                       <span aria-hidden="true"></span>
                       </button>
                    </div>
                    <div class="modal-body" id="modal-body-space">
                    </div>
                    <div class="modal-footer" id="modal-body-space-buttons">
                    </div>
                 </div>
              </div>
           </div>
           <br>
           <footer class="footer mt-auto py-3 text-muted bg-primary" style="left: 0; bottom: 0; width: 100%; color: white; z-index: 9999; display:none;"> <div class="container" style="width: auto; padding: 0 10px;"> <p class="float-end"> <a href="#">Back to top</a> </p> <p>Redesigned with <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-heart-fill" fill="red" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" /> </svg> by <a href="https://www.npmjs.com/package/@googledrive/index" target="_blank">TheFirstSpeedster</a>, based on Open Source Softwares.</p> <p>© 2022 - <a href=" https://t.me/afilmyzone1" target="_blank">  AfilmyZone</a>, All Rights Reserved.</p> </div> </footer>
        </div>
     </body>
    <script src="https://cdn.jsdelivr.net/npm/@googledrive/index@2.2.3/assets/homepage.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8" crossorigin="anonymous"></script>

  )
}

export default FourOhFour

  
