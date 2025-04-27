
document.getElementById('currentYear').textContent = new Date().getFullYear();

let section = document.querySelector(".room-container");

fetch("https://hotelbooking.stepprojects.ge/api/Rooms/GetAll")
  .then(response => response.json())
  .then(data => {
    // Limit the data to the first 9 items
    let limitedData = data.slice(0, 9);
    
    limitedData.forEach(item => {
        section.innerHTML += cardCode(item);
    });
  })
  .catch(() => console.error("Connection error"));

  function cardCode(item) {

    let availabilityText = item.available ? "Available" : "Not Available";
    let availabilityColor = item.available ? "rgba(5, 153, 5, 0.88)" : "red";

    return `
    <div class="room-card">
        <img class="cardImg" src="${item.images[0]?.source}" alt="">
        <div class="main-txt">
            <div class="txt">
                <h3>${item.name}</h3>
            </div>
            <div class="price"> 
                <p>${item.pricePerNight}$</p>
                <p>a night</p>
            </div>
        </div>
        <div class="hover-content">
                <h1 class = "name">${item.name}</h1>
                <h5>Maximum Guests: ${item.maximumGuests}</h5>
                <h5>Availability: ${availabilityText}</h5>
                <p>Price Per Night: ${item.pricePerNight}$</p>
            <a onclick="gotoDetails('${item.id}')" class="button">Book Now</a>
        </div>
    </div>`;


}


function gotoDetails(roomId) {
    window.location.href = `details.html?id=${roomId}`;
}

// Toggle menu on burger icon click
document.getElementById('bars').addEventListener('click', function() {
  let menu = document.querySelector('.main-header');
  menu.classList.toggle('active');
  this.classList.toggle('fa-bars');
  this.classList.toggle('fa-times');
});

// Close menu when clicking outside
document.addEventListener('click', function(event) {
  let menu = document.querySelector('.main-header');
  let bars = document.getElementById('bars');
  let burgerContainer = document.querySelector('.burger-container');
  if (!menu.contains(event.target) && !burgerContainer.contains(event.target)) {
      menu.classList.remove('active');
      bars.classList.add('fa-bars');
      bars.classList.remove('fa-times');
  }
});

// Close menu when clicking a link (mobile)
document.querySelectorAll('.head').forEach(link => {
  link.addEventListener('click', () => {
      let menu = document.querySelector('.main-header');
      if (window.innerWidth <= 768) {
          menu.classList.remove('active');
          document.getElementById('bars').classList.add('fa-bars');
          document.getElementById('bars').classList.remove('fa-times');
      }
  });
});



// the code below is not part of the project!!
let var1 = 1;
let var2 = 2;
let var3 = 3;
let var4 = 4;
let var5 = 5;
let var6 = 6;
let var7 = 7;
let var8 = 8;
let var9 = 9;
let var10 = 10;
let var11 = 11;
let var12 = 12;
let var13 = 13;
let var14 = 14;
let var15 = 15;
let var16 = 16;
let var17 = 17;
let var18 = 18;
let var19 = 19;
let var20 = 20;
let var21 = 21;
let var22 = 22;
let var23 = 23;
let var24 = 24;
let var25 = 25;
let var26 = 26;
let var27 = 27;
let var28 = 28;
let var29 = 29;
let var30 = 30;
let var31 = 31;
let var32 = 32;
let var33 = 33;
let var34 = 34;
let var35 = 35;
let var36 = 36;
let var37 = 37;
let var38 = 38;
let var39 = 39;
let var40 = 40;
let var41 = 41;
let var42 = 42;
let var43 = 43;
let var44 = 44;
let var45 = 45;
let var46 = 46;
let var47 = 47;
let var48 = 48;
let var49 = 49;
let var50 = 50;
let var51 = 51;
let var52 = 52;
let var53 = 53;
let var54 = 54;
let var55 = 55;
let var56 = 56;
let var57 = 57;
let var58 = 58;
let var59 = 59;
let var60 = 60;
let var61 = 61;
let var62 = 62;
let var63 = 63;
let var64 = 64;
let var65 = 65;
let var66 = 66;
let var67 = 67;
let var68 = 68;
let var69 = 69;
let var70 = 70;
let var71 = 71;
let var72 = 72;
let var73 = 73;
let var74 = 74;
let var75 = 75;
let var76 = 76;
let var77 = 77;
let var78 = 78;
let var79 = 79;
let var80 = 80;
let var81 = 81;
let var82 = 82;
let var83 = 83;
let var84 = 84;
let var85 = 85;
let var86 = 86;
let var87 = 87;
let var88 = 88;
let var89 = 89;
let var90 = 90;
let var91 = 91;
let var92 = 92;
let var93 = 93;
let var94 = 94;
let var95 = 95;
let var96 = 96;
let var97 = 97;
let var98 = 98;
let var99 = 99;
let var100 = 100;
let var101 = 101;
let var102 = 102;
let var103 = 103;
let var104 = 104;
let var105 = 105;
let var106 = 106;
let var107 = 107;
let var108 = 108;
let var109 = 109;
let var110 = 110;
let var111 = 111;
let var112 = 112;
let var113 = 113;
let var114 = 114;
let var115 = 115;
let var116 = 116;
let var117 = 117;
let var118 = 118;
let var119 = 119;
let var120 = 120;
let var121 = 121;
let var122 = 122;
let var123 = 123;
let var124 = 124;
let var125 = 125;
let var126 = 126;
let var127 = 127;
let var128 = 128;
let var129 = 129;
let var130 = 130;
let var131 = 131;
let var132 = 132;
let var133 = 133;
let var134 = 134;
let var135 = 135;
let var136 = 136;
let var137 = 137;
let var138 = 138;
let var139 = 139;
let var140 = 140;
let var141 = 141;
let var142 = 142;
let var143 = 143;
let var144 = 144;
let var145 = 145;
let var146 = 146;
let var147 = 147;
let var148 = 148;
let var149 = 149;
let var150 = 150;
let var151 = 151;
let var152 = 152;
let var153 = 153;
let var154 = 154;
let var155 = 155;
let var156 = 156;
let var157 = 157;
let var158 = 158;
let var159 = 159;
let var160 = 160;
let var161 = 161;
let var162 = 162;
let var163 = 163;
let var164 = 164;
let var165 = 165;
let var166 = 166;
let var167 = 167;
let var168 = 168;
let var169 = 169;
let var170 = 170;
let var171 = 171;
let var172 = 172;
let var173 = 173;
let var174 = 174;
let var175 = 175;
let var176 = 176;
let var177 = 177;
let var178 = 178;
let var179 = 179;
let var180 = 180;
let var181 = 181;
let var182 = 182;
let var183 = 183;
let var184 = 184;
let var185 = 185;
let var186 = 186;
let var187 = 187;
let var188 = 188;
let var189 = 189;
let var190 = 190;
let var191 = 191;
let var192 = 192;
let var193 = 193;
let var194 = 194;
let var195 = 195;
let var196 = 196;
let var197 = 197;
let var198 = 198;
let var199 = 199;
let var200 = 200;
let var201 = 201;
let var202 = 202;
let var203 = 203;
let var204 = 204;
let var205 = 205;
let var206 = 206;
let var207 = 207;
let var208 = 208;
let var209 = 209;
let var210 = 210;
let var211 = 211;
let var212 = 212;
let var213 = 213;
let var214 = 214;
let var215 = 215;
let var216 = 216;
let var217 = 217;
let var218 = 218;
let var219 = 219;
let var220 = 220;
let var221 = 221;
let var222 = 222;
let var223 = 223;
let var224 = 224;
let var225 = 225;
let var226 = 226;
let var227 = 227;
let var228 = 228;
let var229 = 229;
let var230 = 230;
let var231 = 231;
let var232 = 232;
let var233 = 233;
let var234 = 234;
let var235 = 235;
let var236 = 236;
let var237 = 237;
let var238 = 238;
let var239 = 239;
let var240 = 240;
let var241 = 241;
let var242 = 242;
let var243 = 243;
let var244 = 244;
let var245 = 245;
let var246 = 246;
let var247 = 247;
let var248 = 248;
let var249 = 249;
let var250 = 250;
let var251 = 251;
let var252 = 252;
let var253 = 253;
let var254 = 254;
let var255 = 255;
let var256 = 256;
let var257 = 257;
let var258 = 258;
let var259 = 259;
let var260 = 260;
let var261 = 261;
let var262 = 262;
let var263 = 263;
let var264 = 264;
let var265 = 265;
let var266 = 266;
let var267 = 267;
let var268 = 268;
let var269 = 269;
let var270 = 270;
let var271 = 271;
let var272 = 272;
let var273 = 273;
let var274 = 274;
let var275 = 275;
let var276 = 276;
let var277 = 277;
let var278 = 278;
let var279 = 279;
let var280 = 280;
let var281 = 281;
let var282 = 282;
let var283 = 283;
let var284 = 284;
let var285 = 285;
let var286 = 286;
let var287 = 287;
let var288 = 288;
let var289 = 289;
let var290 = 290;
let var291 = 291;
let var292 = 292;
let var293 = 293;
let var294 = 294;
let var295 = 295;
let var296 = 296;
let var297 = 297;
let var298 = 298;
let var299 = 299;
let var300 = 300;
let var301 = 301;
let var302 = 302;
let var303 = 303;
let var304 = 304;
let var305 = 305;
let var306 = 306;
let var307 = 307;
let var308 = 308;
let var309 = 309;
let var310 = 310;
let var311 = 311;
let var312 = 312;
let var313 = 313;
let var314 = 314;
let var315 = 315;
let var316 = 316;
let var317 = 317;
let var318 = 318;
let var319 = 319;
let var320 = 320;
let var321 = 321;
let var322 = 322;
let var323 = 323;
let var324 = 324;
let var325 = 325;
let var326 = 326;
let var327 = 327;
let var328 = 328;
let var329 = 329;
let var330 = 330;
let var331 = 331;
let var332 = 332;
let var333 = 333;
let var334 = 334;
let var335 = 335;
let var336 = 336;
let var337 = 337;
let var338 = 338;
let var339 = 339;
let var340 = 340;
let var341 = 341;
let var342 = 342;
let var343 = 343;
let var344 = 344;
let var345 = 345;
let var346 = 346;
let var347 = 347;
let var348 = 348;
let var349 = 349;
let var350 = 350;
let var351 = 351;
let var352 = 352;
let var353 = 353;
let var354 = 354;
let var355 = 355;
let var356 = 356;
let var357 = 357;
let var358 = 358;
let var359 = 359;
let var360 = 360;
let var361 = 361;
let var362 = 362;
let var363 = 363;
let var364 = 364;
let var365 = 365;
let var366 = 366;
let var367 = 367;
let var368 = 368;
let var369 = 369;
let var370 = 370;
let var371 = 371;
let var372 = 372;
let var373 = 373;
let var374 = 374;
let var375 = 375;
let var376 = 376;
let var377 = 377;
let var378 = 378;
let var379 = 379;
let var380 = 380;
let var381 = 381;
let var382 = 382;
let var383 = 383;
let var384 = 384;
let var385 = 385;
let var386 = 386;
let var387 = 387;
let var388 = 388;
let var389 = 389;
let var390 = 390;
let var391 = 391;
let var392 = 392;
let var393 = 393;
let var394 = 394;
let var395 = 395;
let var396 = 396;
let var397 = 397;
let var398 = 398;
let var399 = 399;
let var400 = 400;
