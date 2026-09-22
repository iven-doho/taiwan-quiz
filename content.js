/* ============================================================
   UNFOLD TAIWAN — board content
   ------------------------------------------------------------
   EVERYTHING you would want to change lives in this file.
   index.html holds only layout and behaviour; you should not
   need to open it.

   ── The board is a fixed 4x4 ring. Positions run CLOCKWISE
      from the top-left corner. The shape of each position is
      decided by the grid, not by what you put in it:

        01  02  03  04          01 04 07 10   square  206x206
        12          05          02 03 08 09   WIDE    409x206  (2:1)
        11          06          05 06 11 12   side    206x190
        10  09  08  07

      Reorder by moving entries in TILES at the bottom. The
      first entry lands on 01, the second on 02, and so on.

   ── Two things to know before you rearrange:

      1. Corners (01 04 07 10) are the strongest positions on a
         board — the eye stops there.
      2. The four WIDE positions crop a square photo to HALF its
         height. Put things there whose picture survives that,
         or things that lean on their words rather than a photo.

   ── Copy limits, measured against the 83px mobile square:

        kind   10 chars      t (title)  12 chars, breaks on a space
        s      24 chars      flag        9 chars

      On the CARD, which is roomier:
        s      reappears as the display line over the manifesto
        body   40-60 words. Longer still fits — the card scrolls —
               but past ~70 words the three pictures get pushed
               under the fold on a phone.
        gal    exactly 3. Captions optional; 4-5 words each.

      Titles longer than 12 chars with no space get clipped on
      phones. That is why "Dadaocheng" became "Dihua Street".

   ── AFTER EDITING THIS FILE: bump the ?v= number on the content.js
      <script> tag in index.html, or hard-refresh. Browsers cache this
      file and will otherwise keep showing the old copy.

   ── photo:'07' points at photos/07.webp. Leave it off and the
      square falls back to its flat colour, which is a valid
      state — squares can be filled in one at a time.
   ============================================================ */

const LOGO='img/';          // where the carrier marks live
const MARKET='sf';
const MARKETS={
 sf:{brand:'Feel Taiwan',region:'Northern California · Nevada · Utah',
     carriers:[{k:'ci',name:'China Airlines',cond:'SFO → TPE direct'},
               {k:'br',name:'EVA Air',cond:'787-9 · free Taipei stopover'},
               {k:'jx',name:'STARLUX Airlines',cond:'A350 · SFO non-stop'}]},
 east:{brand:'Unfold Taiwan',region:'US East · Canada East',
     carriers:[{k:'ci',name:'China Airlines',cond:'JFK / YYZ → TPE'},
               {k:'br',name:'EVA Air',cond:'787-9 · free Taipei stopover'}]}};
const M=MARKETS[MARKET];

/* ── the twelve squares, in board order ──────────────────────
   01 is the top-left corner, running CLOCKWISE.
   02 03 08 09 are the WIDE 2:1 slots.                          */

/* ── the twelve squares, in board order ──────────────────
   01 is the top-left corner, running CLOCKWISE.
   02 03 08 09 are the WIDE 2:1 slots.

   Each square carries:
     photo  the square's OWN picture          photos/<n>.webp
     kind   the small label                   10 chars
     t      the title                         12 chars
     s      the line under it                 24 chars
     flag   the corner badge, promos only      9 chars
     body   THE MANIFESTO — the card's whole text. 40-60 words.
            Write it as one paragraph; it is the voice of the square.
     gal    THREE pictures for the card        photos/cards/<n>a|b|c.webp
            {i:'02a', c:'caption'} — caption optional, leave '' for none
     cta    the link at the foot, or null      {t:'label', u:'https://…'}
   ────────────────────────────────────────────── */

const START={cls:'start',kind:'Start',t:'START! TPE Airport',
  s:'Fly to Taiwan. Discover the offers.',
  carriers:M.carriers,
  body:'Taiwanese carriers bring you to Taiwan in distinctly Taiwanese style, with warm '
      +'hospitality, thoughtful service, and flavors of the island. Your journey begins '
      +'before you land.',
  /* the three pictures here are the three carriers, not photographs */
  gal:M.carriers.map(c=>({logo:c.k, c:c.name, sub:c.cond})),
  cta:{t:'Find out about the latest promotions', u:'#'}};

const FLAVOR={photo:'02',hue:'#FF5629',kind:'100 Ways',t:'Flavor',
  s:'Follow your appetite.',
  body:'Come hungry. Follow your appetite through Taiwan\u2019s night markets, savor island '
      +'specialties, and discover everything from beloved street food to Michelin-starred '
      +'dining. Every turn serves up something deliciously unexpected.',
  gal:[{i:'02a',c:'Raohe Night Market'},{i:'02b',c:''},{i:'02c',c:''}],
  cta:null};

const RETURN={hue:'#007758',kind:'Promo',t:'NT$8,000 Reward',
  s:'Return to Taiwan. Double your luck.',flag:'NT$8,000',
  body:'Registration opens October 1 for eligible repeat visitors arriving from October 10, '
      +'with a chance at NT$5,000 in travel credit, plus NT$3,000 for an eligible companion.',
  gal:[{i:'03a',c:''},{i:'03b',c:''},{i:'03c',c:''}],
  cta:{t:'Learn more and register', u:'#'}};

const HALFDAY={hue:'#269AF9',kind:'Promo',t:'NT$600 Transit Gift',
  s:'A free half-day tour awaits.',flag:'Free',
  body:'Connect to Asia through Taiwan, and turn a long layover into your first taste of the '
      +'island. Eligible transit travelers with 7 to 24 hours can enjoy a free tour and '
      +'NT$600 in gift vouchers.',
  gal:[{i:'04a',c:''},{i:'04b',c:''},{i:'04c',c:''}],
  cta:{t:'Learn more and register', u:'#'}};

const CULTURE={photo:'05',hue:'#814724',kind:'100 Ways',t:'Culture',
  s:'Get lost in the story.',
  body:'Wander lantern-lit lanes, meet diverse cultures, and discover how many traditions '
      +'inspire new creativity. In Taiwan, every street, temple, and teahouse has something '
      +'to tell.',
  gal:[{i:'05a',c:'Jiufen'},{i:'05b',c:''},{i:'05c',c:''}],
  cta:null};

const NATURE={photo:'06',hue:'#007758',kind:'100 Ways',t:'Nature',
  s:'Where mountains meet blue.',
  /* opens by echoing the line above it — your file reads this way; say the
     word and it becomes 'Taiwan\u2019s diverse landscapes are always within reach.' */
  body:'Where mountains meet blue, Taiwan\u2019s diverse landscapes are always within reach. '
      +'From dramatic cliffs and forest trails to beaches and valleys, every natural wonder '
      +'leads easily to the next.',
  gal:[{i:'06a',c:'Qingshui Cliffs'},{i:'06b',c:''},{i:'06c',c:''}],
  cta:null};

const WHATSON={hue:'#E5863B',kind:"What's On",t:"What's On",
  s:"See what Taiwan's talking about.",
  body:'Run a road race, take a bike trip, join a cooking class, or explore through '
      +'ecotourism. However you travel, there is an experience waiting for you.',
  gal:[{i:'07a',c:''},{i:'07b',c:''},{i:'07c',c:''}],
  cta:null};

const PASS={hue:'#8146C6',kind:'Promo',t:'Taiwan Pass',
  s:'One pass. More Taiwan.',
  body:'Combine three days of high-speed rail or railway travel with your choice of metro '
      +'and scenic shuttle, making cities and signature sights easier to connect.',
  gal:[{i:'08a',c:''},{i:'08b',c:''},{i:'08c',c:''}],
  cta:{t:'Learn more', u:'#'}};

const LOVE={photo:'09',hue:'#269AF9',kind:'100 Ways',t:'Love',
  s:'Fall for the moment.',
  /* also echoes its own line — same note as Nature above */
  body:'Fall for the moment, and for Taiwan. Find love in warm welcomes, shared meals, time '
      +'with family and friends, romantic waterfront sunsets, music-filled dates, and quiet '
      +'moments for yourself. Here, every connection becomes part of the journey.',
  gal:[{i:'09a',c:'Kaohsiung Music Center'},{i:'09b',c:''},{i:'09c',c:''}],
  cta:null};

const STYLE={photo:'10',hue:'#FFCA03',kind:'100 Ways',t:'Style',
  s:'Many finds. One stylish journey.',
  body:'Browse heritage stores, creative boutiques, and local labels where timeless craft '
      +'meets fresh design. In Taiwan, every shopping street reveals another way to stand out.',
  gal:[{i:'10a',c:'Hayashi Department Store'},{i:'10b',c:''},{i:'10c',c:''}],
  cta:null};

const VITALITY={photo:'11',hue:'#098956',kind:'100 Ways',t:'Vitality',
  s:'Keep the good energy moving.',
  body:'Cycle beside shining lakes, explore scenic trails, then slow down in soothing hot '
      +'springs. Taiwan\u2019s LOHAS spirit makes every active adventure a natural reset.',
  gal:[{i:'11a',c:'Sun Moon Lake'},{i:'11b',c:''},{i:'11c',c:''}],
  cta:null};

const THSR={photo:'12',hue:'#1F8897',kind:'Promo',t:'THSR BOGO',
  s:'Twice the journey. One fare.',flag:'1+1',
  body:'Eligible international visitors can travel south of Taichung with a companion and '
      +'receive a second one-way ticket on the same route, while supplies last.',
  gal:[{i:'12a',c:'THSR'},{i:'12b',c:''},{i:'12c',c:''}],
  cta:{t:'Learn more', u:'#'}};

/*  01  02  03  04
    12          05        corners 01 04 07 10   ·   WIDE 02 03 08 09
    11          06        sides   05 06 11 12
    10  09  08  07                                                 */
const TILES=[START,  FLAVOR, RETURN,  HALFDAY,
             CULTURE, NATURE,
             WHATSON, PASS,   LOVE,    STYLE,
             VITALITY, THSR];

/* ── the middle of the board ──────────────────────────────── */
const CENTRE = {
  title  : ['Unfold', 'Taiwan'],              // 2nd word takes the orange
  // one supporting line only, shown at every screen size
  lede   : 'Choose what calls you, or let the next turn surprise you.',
  lines  : ['Every Turn Reveals More.',
            'One Island. Endless Ways.'],
  button : 'Surprise me'
};
