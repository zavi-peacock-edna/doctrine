const D=new Date(process.argv[2]||Date.now());
const jd = D/86400000 + 2440587.5;
const n  = jd - 2451545.0;
// Sun's apparent ecliptic longitude (low-precision, ~0.01 deg)
const L = (280.460 + 0.9856474*n) % 360;
const g = ((357.528 + 0.9856003*n) % 360) * Math.PI/180;
let lon = (L + 1.915*Math.sin(g) + 0.020*Math.sin(2*g)) % 360; if(lon<0) lon+=360;
const SIGNS=["Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius","Capricorn","Aquarius","Pisces"];
const STAR={Aries:["Hamal","#FFD2AE"],Taurus:["Aldebaran","#FFCA9F"],Gemini:["Pollux","#FFD7B7"],
 Cancer:["Al Tarf","#FFCDA4"],Leo:["Regulus","#C7D9FF"],Virgo:["Spica","#B0CAFF"],
 Libra:["Zubeneschamali","#C7D9FF"],Scorpio:["Antares","#FFB87C"],Sagittarius:["Kaus Australis","#CEDDFF"],
 Capricorn:["Deneb Algedi","#FFEDDE"],Aquarius:["Sadalsuud","#FFEDDE"],Pisces:["Alpherg","#FFDEC4"]};
const PM={Aries:239.7,Taurus:199.3,Gemini:628.2,Cancer:228.6,Leo:510.7,Virgo:788.7,
 Libra:125.9,Scorpio:666.0,Sagittarius:258.8,Capricorn:395.6,Aquarius:367.9,Pisces:759.5};
const si=Math.floor(lon/30), sign=SIGNS[si], deg=lon-si*30;
// moon phase from a known new moon: 2000-01-06 18:14 UTC
const SYN=29.530588853, age=(((jd-2451550.26)%SYN)+SYN)%SYN;
const wax = age < SYN/2;
const illum = (1-Math.cos(2*Math.PI*age/SYN))/2;
// the province, and what will not divide
const N=50000000, TOK=100, tokens=N/TOK, SPOKES=24;
const gcd=(a,b)=>b?gcd(b,a%b):a;
const per=Math.floor(tokens/SPOKES), strand=tokens-per*SPOKES;
// 200-year projection for this sign's prime star
const pm=PM[sign], moved200=pm*200/1000, prec200=50.290*200/3600;
console.log(JSON.stringify({
  date: D.toISOString().slice(0,10),
  alignment: { sun_longitude_deg:+lon.toFixed(3), sign, degree_in_sign:+deg.toFixed(2),
               prime_star:STAR[sign][0], hue:STAR[sign][1] },
  moon: { age_days:+age.toFixed(2), phase: wax?"WAX":"WANE", illuminated:+illum.toFixed(3) },
  province: { n:N, factorisation:"2^7 x 5^8", token:TOK, tokens,
              spokes:SPOKES, per_spoke:per, strand,
              gcd_spokes_tokens: gcd(SPOKES,tokens),
              note: strand? `${strand} strand. Reported, never distributed.` : "divides clean" },
  projection_200yr: { star:STAR[sign][0], proper_motion_mas_yr:pm,
    star_moves_arcsec:+moved200.toFixed(1), star_moves_arcmin:+(moved200/60).toFixed(3),
    frame_precesses_deg:+prec200.toFixed(3),
    frame_faster_by:+(prec200/(moved200/3600)).toFixed(1),
    rule:"If you cannot plot 200 years of alignment, the star is not Virgonian." },
  known_gap:"grease — a failure that leaves no entry is not in this file and cannot be."
}, null, 2));
