# liri-bot-app

ABOUT THE APP:

LIRI is a Language Interpretation and Recognition Interface. It is a command line node app that takes on four commands and returns the relative data.

The four commands are:

"concert-this", "spotify-this-song", "movie-this", and "do-what-it-says"

REQUIRED TECH:

APIs:

Spotify (https://developer.spotify.com/)
OMDB (http://www.omdbapi.com)
Bands In Town (http://www.artists.bandsintown.com/bandsintown-api)

NPM Packages:

Node-Spotify-API (https://www.npmjs.com/package/node-spotify-api)
Axios (https://www.npmjs.com/package/axios)
Moment (https://www.npmjs.com/package/moment)
DotEnv (https://www.npmjs.com/package/dotenv)

APP COMMANDS:

1) "CONCERT-THIS"

![Image 1](https://gm1.ggpht.com/RlJfJ3wl-W5V2YotlcDN53o-kc4_fejCYbRhjWzPpEhogV7Qo8D1mJms4xoaSIUIxYUoebVIt6jc55qGUhw5RkdSJLTxKBf7vbFtWTbYsTWvAUY-TMm5WBtwqWI3GI5BNmFsvmU1UUBrqfnDAFl598fS4_eG2m7NXy5qywjDTwkEof825Im29uUHb51caFNdg91hc_n0nijy9WOQTnHBz-WwrJAHRp8Av1v4o5Q3-TZBtU9gB4F4ik5CjzGLLWMRB1IcsxzBcrHR2E3zdLaLXs0OieoyZmgicCIcLXVZR_w813WtM9YUTqy9NwhSnSHDiHJ7C5I3BySbL5YhzjwRjWn_ECwnpajHNrL9cXs0Dc9-Yo7_G104MWxlXilEP4eZeVkzoZbGSbBwJjGKK2smyaM4vyCtbRBePLk8VX_xfCxUif7La-eVcVn4Tz1yf0X4WQXvmGfKc639SXHXQDL2atvf17fKCqYAOFmB-iurZTeAmMN2xzojT_gb5DtxVB2Xl5jCz3hX1yLjnvOZdWi9kQ00bCBybCLfseWu41wUqjmKV3IX-7qANogTyx6r_qWZWDII8_Of9jXDI6SDHTgAvArn8pC1gUrlXGs_gPjiTCKL-eYvGHIcVN8rjY_9iCYkRcsCmVwisPNDUY4jyH8BTRoEb2uFxSxYFwxf80zHOP9oUVN2L4LyF2xY1tC-m2snJrUBjzsAc1bBCYm4tcO5Q3Sl4Kw7d7tjK5_p7MuGENQKqEjOAli8SvuwpztMMw=s0-l75-ft-l75-ft)

Searches the Bands in Town Artist Events API for an artist and renders the following information about each event to the terminal:

- Name of the venue
- Venue location
- Date of the Event (using the format "MM/DD/YYYY")

2) "SPOTIFY-THIS-SONG"

![Image 2](https://gm1.ggpht.com/RkMdGu0vRAOx0s0OJTKq7gI_MwemI3SixAsdhqhyZDFHwKiadQBeWNE4rdt72xgCD0vaS5ZO958WsUetZKaVVc9xnFwq-KQKpXFort2DTBn_TfICpqP15yVpBcjIP3TLiySu3SSXA8GLRXcFdg7tZdtJZnaM3Oq9qkG04cxQihOsz4Tzempe4SvEQ3ctAafxzCh-QdErsRMvb-Ze-MRWtEZGFwIZeUuiLDqCYgGfX7P-5NSAfPMwtte7g8Ue8cFfxObsuDEmaFiDu_AHsOuPKgeCOJtYVh52BsuvbzGMNvuOTuGyYWEsdXpTbG5O1YwNFsTXcCX5XG7AJTTBY-DuvsDso94r-wE3tJipYC5yKK2rNuINJNCCdKWkPqv4XQ3MMjnlYN0qPADPl7oJ1jAsEafw-6u-vdW9DdsMWDcgdql-1K_0bW_MmZloPqHCSm8queCyq1WF0lkLfP8U05nYS7onPkmn479YfW3IyMET6BjaL2HaKb7pVQ88z0RL_pyCQW4yMZmAPUN9MLaxHlTeu4e9CjX9rYypWNRptngiXIDvA3f4YQR6WVD7EZzw6w0VjfZXxxRdQKGHWyggGIWVV0VRtw-bB7cAwgvm1e52303HKYAUxIpM1A8xtFM4QPDGAUXyxmm0FzKWjtpY-27EFb3Cu3b0qR0x81MzBracLDtlgeovnjuIAEBeqzgXqh7dvz4ZXlsE86xvrM2_Q7_CNO1Jv7AuolWPthb4jZgTQG4FwJHQCdriZvMsIH_cc4U=s0-l75-ft-l75-ft)


Displays the following information about the selected song in your terminal/bash window

- Artist(s)
- The song's name
- A preview link of the song from Spotify
- The album containing the song

3) "MOVIE-THIS"

![Image 3](https://gm1.ggpht.com/2fj6I5alup_iBpgJtR7vFPmlaBDosIMF902qNkUwpxl7Ka4aPwo4CXzxvQ-Idx2RzI5XJ9PEM7zRxaChrRvJyLnOsQYjC8vYMQyQL9CPnnKi9KUqlE4odE6Ybo_fScHXUga6lZHvOKpC-105jsW83Cilu0VxzZEOHNoASK3ktW-GHlu-ZSCmP6P0mvC68Msj1KLvGuDWTXJxoqU1udFhIBTGMExWX_CQtEq4Gn-B0oiSzHqqqAq9oP_GYUayWhEt_W5D8KI2BrT-WehmaVfyGmVBR_QLqrZQDdxj60hHnMGY3_AiEvUfG-wcectJXS72RBJiBZboVkPLB5UTRdlZ-I3uqNSjSpTd0eXR02hJehT1uHGKBMk_Ft2suQbMGwq4LKZn7Jlq76EUnuqga0klxrmRKcm2e3gBX9GqI7KvXA0J76abhXJSdckRAQVrb9pJJHBxISE-f-qZBFdX4Msp-DaaE9Z1UBepUG6Sk5dwiDqB2fGvM-tzj_3yBjXNR977LARStZnh2gQ314IkgFz4EtvUvg2FsDyRv9bmlmY5UnRWX19mlRqE961CXUkQqvGMeq2Qk-F74Ia4EREsnh38xyrJZncSLUnnmEBsoHOzaT4PdCjm-HMSJVUDE9OfcngIp3I1ZF-fi3LrDiBbYeHtMhtJKSQ7ftGzLn7QKFrnSBRHoyCRDxXT4aI8hdvOHbzLKa90jphau77r_E3DThbIVDQ52XcWULeZBz2AFflivJT93XUJYagdHQ_Vbm5gIoU=s0-l75-ft-l75-ft)

This will output the following movie information to your terminal/bash window:

  * Title
  * Year movie was released
  * IMDB Rating
  * Rotten Tomatoes Rating
  * Country where movie was produced
  * Language(s)
  * Plot of the movie
  * Actors in the movie
  
4) "DO-WHAT-IT-SAYS"

![Image 4](https://gm1.ggpht.com/zljjXc0A3Wl0IZFjYdxr_XN7CrbmYXo_h797g8khN96cE7ByDM_yl7Sq2Tzge47Nk9P_gRnx-Wkn6TJYwK4oN2QFI6kT2iwSnKzNRwmJ2kfh54hVFav3zZt4gVBVaIMDLqQ5ClsEn79NsSuqPOaPj9yk-DSLDosHo7RGRGJkdfTE-HgTc21meTUmcZT_dVobqmJ3G7kcktZtgsXl21eZ_R0Eb9y0gVzepgXWSOwT4dFwr-U_l1WMa8Wvih2tbt17fX8WXZK-26BCwmYUbR5paYXvCyam526q7xZvJdYxs3Nx76ZOq29-z7h1Try57O_PQKZa_S5--7yTEbTyCs4mQ38T0JMe_9lBSnsy8uidyZ39GvBzk2nJ_f1gzf4L6t9mhqGHux__wRloQft0PCTLnnq0rJISeA6Znp25rwA9UIA1EKhJza1hsIlovMDt9DHQXHcGAfggixODtXVH9QmtK-HupMgMSCX7Pr1gnTibhvuYihB9LweMzSVdBu7dGQGne7uPQgYbMuvOg7_9WSgKhthySqcG8rHUFRDXSKHJhySF4VoyLOzEkniiDnWlJxrTmz1FxulzUcT8V29IAiP-tJS9oIgfAtdVfspyeb6C7pyubzoFsx3-ThDOyTNEneIObcOHnkpyrWVRr5Y8ClbZLh81poerWoNEw4PPKs9MQX853HN_FqGO8IQ90hF-B8hMuEjemzyEQwYCptqtNFvzxzGxkfD6g5prfyEa-5FlSl1tgwYqpKp-dmqIJsFOhho=s0-l75-ft-l75-ft)

- Runs "spotify-this-song" for "I Want it That Way"
