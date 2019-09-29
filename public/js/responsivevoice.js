if (typeof rvAgentPlayer !== 'undefined') {
  throw new Error('ResponsiveVoice Website Agent is already running');
}

var rvAgentPlayer = { version: 1 };

if (typeof responsiveVoice === 'undefined') {
/*
 ResponsiveVoice JS v1.5.16

 (c) 2015-2019 LearnBrite

 License: http://responsivevoice.org/license
*/
  if (typeof responsiveVoice !== 'undefined')console.log('ResponsiveVoice already loaded'), console.log(responsiveVoice); else {
    const ResponsiveVoice = function () {
      function p(a) { a = a.replace(/([\n\r])+/gm, '\n'); for (let b = /([,.:!\u00a1?\u00bf;()\[\]\u2014\u00ab\u00bb])+[\n\r]/gm, d = !0; d;)a.match(b) === null ? d = !1 : a = a.replace(b, '$1 '); return a; } function q(a, c) {
        if (!n) return a; console.log(c); let b = a; try {
          for (let h = 0; h < n.length; h++) {
            const g = n[h]; let f = !1; let e = g.collectionvoices; e ? (Array.isArray(e) || (e = [e]), c.collectionvoice && c.collectionvoice.name
&& e.indexOf(c.collectionvoice.name) != -1 && (f = !0)) : f = !0; let k = !1; let l = g.systemvoices; l ? (Array.isArray(l) || (l = [l]), c.systemvoice && c.systemvoice.name && l.indexOf(c.systemvoice.name) != -1 && (k = !0)) : k = !0; (e == null || e != null && f) && (l == null || l != null && k) && (b = b.replace(g.searchvalue, g.newvalue));
          } return b;
        } catch (m) { return console.warn('ResponsiveVoice: There was an error while processing the textReplacements array'), a; }
      } const a = this; a.version = '1.5.16'; console.log(`ResponsiveVoice r${a.version}`); a.responsivevoices = [{
        name: 'UK English Female',
        flag: 'gb',
        gender: 'f',
        lang: 'en-GB',
        voiceIDs: [3, 7, 171, 201, 5, 1, 257, 286, 342, 258, 287, 343, 8],
      }, {
        name: 'UK English Male', flag: 'gb', gender: 'm', lang: 'en-GB', voiceIDs: [0, 277, 202, 75, 4, 2, 256, 285, 341, 159],
      }, {
        name: 'US English Female', flag: 'us', gender: 'f', lang: 'en-US', voiceIDs: [432, 433, 434, 39, 40, 41, 42, 383, 205, 204, 43, 173, 235, 283, 339, 408, 44],
      }, {
        name: 'US English Male', flag: 'us', gender: 'm', lang: 'en-US', voiceIDs: [431, 234, 282, 338, 236, 284, 340, 2, 4, 0, 75, 195, 169],
      }, {
        name: 'Arabic Male',
        flag: 'ar',
        gender: 'm',
        lang: 'ar-SA',
        voiceIDs: [96,
          95, 97, 196, 388],
      }, {
        name: 'Arabic Female', flag: 'ar', gender: 'f', lang: 'ar-SA', voiceIDs: [98],
      }, {
        name: 'Armenian Male', flag: 'hy', gender: 'f', lang: 'hy-AM', voiceIDs: [99],
      }, {
        name: 'Australian Female', flag: 'au', gender: 'f', lang: 'en-AU', voiceIDs: [415, 276, 201, 87, 5, 88],
      }, {
        name: 'Australian Male', flag: 'au', gender: 'm', lang: 'en-AU', voiceIDs: [86, 386],
      }, {
        name: 'Bangla Bangladesh Female', flag: 'bd', gender: 'f', lang: 'bn-BD', voiceIDs: [435],
      }, {
        name: 'Bangla Bangladesh Male', flag: 'bd', gender: 'm', lang: 'bn-BD', voiceIDs: [410, 436],
      }, {
        name: 'Bangla India Female',
        flag: 'bd',
        gender: 'f',
        lang: 'bn-IN',
        voiceIDs: [447],
      }, {
        name: 'Bangla India Male', flag: 'bd', gender: 'm', lang: 'bn-IN', voiceIDs: [411, 448],
      }, {
        name: 'Brazilian Portuguese Female', flag: 'br', gender: 'f', lang: 'pt-BR', voiceIDs: [245, 124, 123, 125, 186, 223, 126],
      }, {
        name: 'Brazilian Portuguese Male', flag: 'br', gender: 'm', lang: 'pt-BR', voiceIDs: [315, 332, 371, 399],
      }, {
        name: 'Chinese Female', flag: 'cn', gender: 'f', lang: 'zh-CN', voiceIDs: [249, 58, 59, 380, 281, 231, 155, 60, 191, 268, 297, 353, 269, 298, 354, 409, 61],
      }, {
        name: 'Chinese Male',
        flag: 'cn',
        gender: 'm',
        lang: 'zh-CN',
        voiceIDs: [317, 334, 373, 389],
      }, {
        name: 'Chinese (Hong Kong) Female', flag: 'hk', gender: 'f', lang: 'zh-HK', voiceIDs: [192, 193, 232, 250, 251, 270, 299, 355, 409, 444, 252],
      }, {
        name: 'Chinese (Hong Kong) Male', flag: 'hk', gender: 'm', lang: 'zh-HK', voiceIDs: [430, 318, 335, 374, 445, 390],
      }, {
        name: 'Chinese Taiwan Female', flag: 'tw', gender: 'f', lang: 'zh-TW', voiceIDs: [194, 233, 253, 254, 305, 322, 361, 384, 319, 336, 375, 409, 255],
      }, {
        name: 'Chinese Taiwan Male', flag: 'tw', gender: 'm', lang: 'zh-TW', voiceIDs: [320, 337, 376, 391],
      }, {
        name: 'Czech Female',
        flag: 'cz',
        gender: 'f',
        lang: 'cs-CZ',
        voiceIDs: [412, 101, 100, 102, 197, 103],
      }, {
        name: 'Czech Male', flag: 'cz', gender: 'm', lang: 'cs-CZ', voiceIDs: [161],
      }, {
        name: 'Danish Female', flag: 'dk', gender: 'f', lang: 'da-DK', voiceIDs: [413, 105, 104, 106, 198, 107],
      }, {
        name: 'Danish Male', flag: 'da', gender: 'm', lang: 'da-DK', voiceIDs: [162],
      }, {
        name: 'Deutsch Female', flag: 'de', gender: 'f', lang: 'de-DE', voiceIDs: [27, 28, 29, 30, 78, 170, 275, 199, 31, 261, 290, 346, 262, 291, 347, 32],
      }, {
        name: 'Deutsch Male',
        flag: 'de',
        gender: 'm',
        lang: 'de-DE',
        voiceIDs: [307, 324, 363,
          377, 393],
      }, {
        name: 'Dutch Female', flag: 'nl', gender: 'f', lang: 'nl-NL', voiceIDs: [243, 219, 84, 157, 158, 184, 45],
      }, {
        name: 'Dutch Male', flag: 'nl', gender: 'm', lang: 'nl-NL', voiceIDs: [157, 220, 407],
      }, {
        name: 'Estonian Male', flag: 'ee', gender: 'm', lang: 'et-EE', voiceIDs: [416, 446],
      }, {
        name: 'Filipino Female', flag: 'ph', gender: 'f', lang: 'fil-PH', voiceIDs: [418, 437],
      }, {
        name: 'Finnish Female', flag: 'fi', gender: 'f', lang: 'fi-FI', voiceIDs: [417, 90, 89, 91, 209, 92],
      }, {
        name: 'Finnish Male', flag: 'fi', gender: 'm', lang: 'fi-FI', voiceIDs: [160],
      }, {
        name: 'French Female',
        flag: 'fr',
        gender: 'f',
        lang: 'fr-FR',
        voiceIDs: [240, 21, 22, 23, 77, 178, 279, 210, 266, 295, 351, 304, 321, 360, 26],
      }, {
        name: 'French Male', flag: 'fr', gender: 'm', lang: 'fr-FR', voiceIDs: [311, 328, 367, 378, 392],
      }, {
        name: 'French Canadian Female', flag: 'ca', gender: 'f', lang: 'fr-CA', voiceIDs: [419, 210, 449],
      }, {
        name: 'French Canadian Male', flag: 'ca', gender: 'm', lang: 'fr-CA', voiceIDs: [450],
      }, {
        name: 'Greek Female', flag: 'gr', gender: 'f', lang: 'el-GR', voiceIDs: [414, 62, 63, 80, 200, 64],
      }, {
        name: 'Greek Male', flag: 'gr', gender: 'm', lang: 'el-GR', voiceIDs: [163],
      },
      {
        name: 'Hindi Female', flag: 'hi', gender: 'f', lang: 'hi-IN', voiceIDs: [247, 66, 154, 179, 213, 259, 288, 344, 67],
      }, {
        name: 'Hindi Male', flag: 'hi', gender: 'm', lang: 'hi-IN', voiceIDs: [394],
      }, {
        name: 'Hungarian Female', flag: 'hu', gender: 'f', lang: 'hu-HU', voiceIDs: [420, 9, 10, 81, 214, 11],
      }, {
        name: 'Hungarian Male', flag: 'hu', gender: 'm', lang: 'hu-HU', voiceIDs: [164],
      }, {
        name: 'Indonesian Female', flag: 'id', gender: 'f', lang: 'id-ID', voiceIDs: [241, 111, 112, 180, 215, 113],
      }, {
        name: 'Indonesian Male', flag: 'id', gender: 'm', lang: 'id-ID', voiceIDs: [395],
      },
      {
        name: 'Italian Female', flag: 'it', gender: 'f', lang: 'it-IT', voiceIDs: [242, 33, 34, 35, 36, 37, 79, 181, 216, 271, 300, 356, 38],
      }, {
        name: 'Italian Male', flag: 'it', gender: 'm', lang: 'it-IT', voiceIDs: [312, 329, 368, 406],
      }, {
        name: 'Japanese Female', flag: 'jp', gender: 'f', lang: 'ja-JP', voiceIDs: [51, 280, 217, 52, 153, 182, 273, 302, 358, 274, 303, 359, 53],
      }, {
        name: 'Japanese Male', flag: 'jp', gender: 'm', lang: 'ja-JP', voiceIDs: [248, 50, 313, 330, 369, 396],
      }, {
        name: 'Korean Female',
        flag: 'kr',
        gender: 'f',
        lang: 'ko-KR',
        voiceIDs: [54, 55, 56, 156, 183, 218, 306, 323,
          362, 384, 57],
      }, {
        name: 'Korean Male', flag: 'kr', gender: 'm', lang: 'ko-KR', voiceIDs: [397],
      }, {
        name: 'Latin Female', flag: 'va', gender: 'f', lang: 'la', voiceIDs: [114], deprecated: !0,
      }, {
        name: 'Latin Male', flag: 'va', gender: 'm', lang: 'la', voiceIDs: [165],
      }, {
        name: 'Nepali', flag: 'np', gender: 'f', lang: 'ne-NP', voiceIDs: [423, 441],
      }, {
        name: 'Norwegian Female', flag: 'no', gender: 'f', lang: 'nb-NO', voiceIDs: [422, 72, 73, 221, 74],
      }, {
        name: 'Norwegian Male', flag: 'no', gender: 'm', lang: 'nb-NO', voiceIDs: [166],
      }, {
        name: 'Polish Female',
        flag: 'pl',
        gender: 'f',
        lang: 'pl-PL',
        voiceIDs: [244, 120, 119, 121, 185, 222, 267, 296, 352, 122],
      }, {
        name: 'Polish Male', flag: 'pl', gender: 'm', lang: 'pl-PL', voiceIDs: [314, 331, 370, 398],
      }, {
        name: 'Portuguese Female', flag: 'br', gender: 'f', lang: 'pt-BR', voiceIDs: [128, 127, 129, 187, 224, 272, 301, 357, 130],
      }, {
        name: 'Portuguese Male', flag: 'br', gender: 'm', lang: 'pt-BR', voiceIDs: [400],
      }, {
        name: 'Romanian Female', flag: 'ro', gender: 'f', lang: 'ro-RO', voiceIDs: [424, 151, 150, 152, 225, 46],
      }, {
        name: 'Russian Female',
        flag: 'ru',
        gender: 'f',
        lang: 'ru-RU',
        voiceIDs: [246, 47, 48, 83,
          188, 226, 260, 289, 345, 49],
      }, {
        name: 'Russian Male', flag: 'ru', gender: 'm', lang: 'ru-RU', voiceIDs: [316, 333, 372, 387],
      }, {
        name: 'Sinhala', flag: 'lk', gender: 'f', lang: 'si-LK', voiceIDs: [425, 442],
      }, {
        name: 'Slovak Female', flag: 'sk', gender: 'f', lang: 'sk-SK', voiceIDs: [426, 133, 132, 134, 227, 135],
      }, {
        name: 'Slovak Male', flag: 'sk', gender: 'm', lang: 'sk-SK', voiceIDs: [167], deprecated: !0,
      }, {
        name: 'Spanish Female', flag: 'es', gender: 'f', lang: 'es-ES', voiceIDs: [19, 238, 16, 17, 18, 20, 76, 174, 207, 263, 292, 348, 264, 293, 349, 15],
      }, {
        name: 'Spanish Male',
        flag: 'es',
        gender: 'm',
        lang: 'es-ES',
        voiceIDs: [309, 326, 365, 401],
      }, {
        name: 'Spanish Latin American Female', flag: 'es', gender: 'f', lang: 'es-MX', voiceIDs: [239, 137, 136, 138, 175, 208, 265, 294, 350, 139],
      }, {
        name: 'Spanish Latin American Male', flag: 'es', gender: 'm', lang: 'es-MX', voiceIDs: [136, 310, 327, 366, 402],
      }, {
        name: 'Swedish Female', flag: 'sv', gender: 'f', lang: 'sv-SE', voiceIDs: [427, 85, 149, 228, 65],
      }, {
        name: 'Swedish Male', flag: 'sv', gender: 'm', lang: 'sv-SE', voiceIDs: [148, 168],
      }, {
        name: 'Tamil Female',
        flag: 'hi',
        gender: 'm',
        lang: 'hi-IN',
        voiceIDs: [451],
      }, {
        name: 'Tamil Male', flag: 'hi', gender: 'm', lang: 'hi-IN', voiceIDs: [141],
      }, {
        name: 'Thai Female', flag: 'th', gender: 'f', lang: 'th-TH', voiceIDs: [143, 142, 144, 189, 229, 145],
      }, {
        name: 'Thai Male', flag: 'th', gender: 'm', lang: 'th-TH', voiceIDs: [403],
      }, {
        name: 'Turkish Female', flag: 'tr', gender: 'f', lang: 'tr-TR', voiceIDs: [69, 70, 82, 190, 230, 71],
      }, {
        name: 'Turkish Male', flag: 'tr', gender: 'm', lang: 'tr-TR', voiceIDs: [404],
      }, {
        name: 'Ukrainian Female', flag: 'ua', gender: 'f', lang: 'uk-UA', voiceIDs: [428, 443],
      }, {
        name: 'Vietnamese Female',
        flag: 'vi',
        gender: 'f',
        lang: 'vi-VN',
        voiceIDs: [429, 405],
      }, {
        name: 'Vietnamese Male', flag: 'vi', gender: 'm', lang: 'vi-VN', voiceIDs: [146],
      }, {
        name: 'Afrikaans Male', flag: 'af', gender: 'm', lang: 'af-ZA', voiceIDs: [93],
      }, {
        name: 'Albanian Male', flag: 'sq', gender: 'm', lang: 'sq-AL', voiceIDs: [94],
      }, {
        name: 'Bosnian Male', flag: 'bs', gender: 'm', lang: 'bs', voiceIDs: [14],
      }, {
        name: 'Catalan Male', flag: 'catalonia', gender: 'm', lang: 'ca-ES', voiceIDs: [68],
      }, {
        name: 'Croatian Male', flag: 'hr', gender: 'm', lang: 'hr-HR', voiceIDs: [13],
      }, {
        name: 'Esperanto Male',
        flag: 'eo',
        gender: 'm',
        lang: 'eo',
        voiceIDs: [108],
      }, {
        name: 'Icelandic Male', flag: 'is', gender: 'm', lang: 'is-IS', voiceIDs: [110],
      }, {
        name: 'Latvian Male', flag: 'lv', gender: 'm', lang: 'lv-LV', voiceIDs: [115],
      }, {
        name: 'Macedonian Male', flag: 'mk', gender: 'm', lang: 'mk-MK', voiceIDs: [116],
      }, {
        name: 'Moldavian Female', flag: 'md', gender: 'f', lang: 'md', voiceIDs: [117],
      }, {
        name: 'Moldavian Male', flag: 'md', gender: 'm', lang: 'md', voiceIDs: [117], deprecated: !0,
      }, {
        name: 'Montenegrin Male', flag: 'me', gender: 'm', lang: 'me', voiceIDs: [118],
      }, {
        name: 'Serbian Male',
        flag: 'sr',
        gender: 'm',
        lang: 'sr-RS',
        voiceIDs: [12],
      }, {
        name: 'Serbo-Croatian Male', flag: 'hr', gender: 'm', lang: 'hr-HR', voiceIDs: [131],
      }, {
        name: 'Swahili Male', flag: 'sw', gender: 'm', lang: 'sw-KE', voiceIDs: [140],
      }, {
        name: 'Welsh Male', flag: 'cy', gender: 'm', lang: 'cy', voiceIDs: [147],
      }, {
        name: 'Fallback UK Female', flag: 'gb', gender: 'f', lang: 'en-GB', voiceIDs: [8],
      }]; a.voicecollection = [{ name: 'Google UK English Male' }, { name: 'Agnes' }, { name: 'Daniel Compact' }, { name: 'Google UK English Female' }, { name: 'en-GB', rate: 0.25, pitch: 1 }, {
        name: 'en-AU',
        rate: 0.25,
        pitch: 1,
      }, { name: 'ingl\u00e9s Reino Unido' }, { name: 'English United Kingdom' }, {
        name: 'Fallback en-GB Female', lang: 'en-GB', fallbackvoice: !0, service: 'g1', gender: 'female',
      }, { name: 'Eszter Compact' }, { name: 'hu-HU', rate: 0.4 }, {
        name: 'Fallback Hungarian Female', lang: 'hu', fallbackvoice: !0, service: 'g1',
      }, {
        name: 'Fallback Serbian Male', lang: 'sr', fallbackvoice: !0, service: 'g1', gender: 'male',
      }, {
        name: 'Fallback Croatian Male', lang: 'hr', fallbackvoice: !0, service: 'g1', gender: 'male',
      }, {
        name: 'Fallback Bosnian Male',
        lang: 'bs',
        fallbackvoice: !0,
        service: 'g1',
        gender: 'male',
      }, {
        name: 'Fallback Spanish Female', lang: 'es', fallbackvoice: !0, service: 'g1', gender: 'female',
      }, { name: 'Spanish Spain' }, { name: 'espa\u00f1ol Espa\u00f1a' }, { name: 'Diego Compact', rate: 0.3 }, { name: 'Google Espa\u00f1ol' }, { name: 'es-ES', rate: 0.2 }, { name: 'Google Fran\u00e7ais' }, { name: 'French France' }, { name: 'franc\u00e9s Francia' }, { name: 'Virginie Compact', rate: 0.5 }, { name: 'fr-FR', rate: 0.25 }, {
        name: 'Fallback French Female', lang: 'fr', fallbackvoice: !0, service: 'g1', gender: 'female',
      },
      { name: 'Google Deutsch' }, { name: 'German Germany' }, { name: 'alem\u00e1n Alemania' }, { name: 'Yannick Compact', rate: 0.5 }, { name: 'de-DE', rate: 0.25 }, {
        name: 'Fallback Deutsch Female', lang: 'de', fallbackvoice: !0, service: 'g1', gender: 'female',
      }, { name: 'Google Italiano' }, { name: 'Italian Italy' }, { name: 'italiano Italia' }, { name: 'Paolo Compact', rate: 0.5 }, { name: 'it-IT', rate: 0.25 }, {
        name: 'Fallback Italian Female', lang: 'it', fallbackvoice: !0, service: 'g1', gender: 'female',
      }, { name: 'Google US English', timerSpeed: 1 }, { name: 'English United States' },
      { name: 'ingl\u00e9s Estados Unidos' }, { name: 'Vicki' }, {
        name: 'en-US', rate: 0.2, pitch: 1, timerSpeed: 1.3,
      }, {
        name: 'Fallback US English', lang: 'en-US', fallbackvoice: !0, timerSpeed: 0, service: 'g1', gender: 'female',
      }, {
        name: 'Fallback Dutch Female', lang: 'nl', fallbackvoice: !0, timerSpeed: 0, service: 'g1', gender: 'female',
      }, {
        name: 'Fallback Romanian', lang: 'ro', fallbackvoice: !0, service: 'g1', gender: 'female',
      }, { name: 'Milena Compact' }, { name: 'ru-RU', rate: 0.25 }, {
        name: 'Fallback Russian', lang: 'ru', fallbackvoice: !0, service: 'g1', gender: 'female',
      },
      { name: 'Google \u65e5\u672c\u4eba', timerSpeed: 1 }, { name: 'Kyoko Compact' }, { name: 'ja-JP', rate: 0.25 }, {
        name: 'Fallback Japanese Female', lang: 'ja', fallbackvoice: !0, service: 'g1', gender: 'female',
      }, { name: 'Google \ud55c\uad6d\uc758', timerSpeed: 1 }, { name: 'Narae Compact' }, { name: 'ko-KR', rate: 0.25 }, {
        name: 'Fallback Korean Female', lang: 'ko', fallbackvoice: !0, service: 'g1', gender: 'female',
      }, { name: 'Google \u4e2d\u56fd\u7684', timerSpeed: 1 }, { name: 'Ting-Ting Compact' }, { name: 'zh-CN', rate: 0.25 }, {
        name: 'Fallback Chinese',
        lang: 'zh-CN',
        fallbackvoice: !0,
        service: 'g1',
        gender: 'female',
      }, { name: 'Alexandros Compact' }, { name: 'el-GR', rate: 0.25 }, {
        name: 'Fallback Greek', lang: 'el', fallbackvoice: !0, service: 'g2', gender: 'female',
      }, {
        name: 'Fallback Swedish', lang: 'sv', fallbackvoice: !0, service: 'g2', gender: 'female',
      }, { name: 'hi-IN', rate: 0.25 }, {
        name: 'Fallback Hindi Female', lang: 'hi', fallbackvoice: !0, service: 'g1', gender: 'female',
      }, {
        name: 'Fallback Catalan', lang: 'ca', fallbackvoice: !0, service: 'g1', gender: 'male',
      }, { name: 'Aylin Compact' }, { name: 'tr-TR', rate: 0.25 }, {
        name: 'Fallback Turkish',
        lang: 'tr',
        fallbackvoice: !0,
        service: 'g1',
        gender: 'female',
      }, { name: 'Stine Compact' }, { name: 'no-NO', rate: 0.25 }, {
        name: 'Fallback Norwegian', lang: 'no', fallbackvoice: !0, service: 'g1', gender: 'female',
      }, { name: 'Daniel' }, { name: 'Monica' }, { name: 'Amelie' }, { name: 'Anna' }, { name: 'Alice' }, { name: 'Melina' }, { name: 'Mariska' }, { name: 'Yelda' }, { name: 'Milena' }, { name: 'Xander' }, { name: 'Alva' }, { name: 'Lee Compact' }, { name: 'Karen' }, {
        name: 'Fallback Australian Female', lang: 'en-AU', fallbackvoice: !0, service: 'g1', gender: 'female',
      }, { name: 'Mikko Compact' },
      { name: 'Satu' }, { name: 'fi-FI', rate: 0.25 }, {
        name: 'Fallback Finnish', lang: 'fi', fallbackvoice: !0, service: 'g1', gender: 'female',
      }, {
        name: 'Fallback Afrikans', lang: 'af', fallbackvoice: !0, service: 'g1', gender: 'male',
      }, {
        name: 'Fallback Albanian', lang: 'sq', fallbackvoice: !0, service: 'g1', gender: 'male',
      }, { name: 'Maged Compact' }, { name: 'Tarik' }, { name: 'ar-SA', rate: 0.25 }, {
        name: 'Fallback Arabic', lang: 'ar', fallbackvoice: !0, service: 'g1', gender: 'female',
      }, {
        name: 'Fallback Armenian', lang: 'hy', fallbackvoice: !0, service: 'g1', gender: 'male',
      },
      { name: 'Zuzana Compact' }, { name: 'Zuzana' }, { name: 'cs-CZ', rate: 0.25 }, {
        name: 'Fallback Czech', lang: 'cs', fallbackvoice: !0, service: 'g1', gender: 'female',
      }, { name: 'Ida Compact' }, { name: 'Sara' }, { name: 'da-DK', rate: 0.25 }, {
        name: 'Fallback Danish', lang: 'da', fallbackvoice: !0, service: 'g1', gender: 'female',
      }, {
        name: 'Fallback Esperanto', lang: 'eo', fallbackvoice: !0, service: 'g1', gender: 'male',
      }, { name: 'Fallback Haitian Creole', lang: 'ht', fallbackvoice: !0 }, {
        name: 'Fallback Icelandic', lang: 'is', fallbackvoice: !0, service: 'g1', gender: 'male',
      },
      { name: 'Damayanti' }, { name: 'id-ID', rate: 0.25 }, {
        name: 'Fallback Indonesian Female', lang: 'id', fallbackvoice: !0, service: 'g1', gender: 'female',
      }, {
        name: 'Fallback Latin Female', lang: 'la', fallbackvoice: !0, service: 'g2', gender: 'female',
      }, {
        name: 'Fallback Latvian Male', lang: 'lv', fallbackvoice: !0, service: 'g1', gender: 'male',
      }, {
        name: 'Fallback Macedonian Male', lang: 'mk', fallbackvoice: !0, service: 'g1', gender: 'male',
      }, {
        name: 'Fallback Moldavian Female', lang: 'mo', fallbackvoice: !0, service: 'g2', gender: 'female',
      }, {
        name: 'Fallback Montenegrin Male',
        lang: 'sr-ME',
        fallbackvoice: !0,
        service: 'g1',
        gender: 'male',
      }, { name: 'Agata Compact' }, { name: 'Zosia' }, { name: 'pl-PL', rate: 0.25 }, {
        name: 'Fallback Polish Female', lang: 'pl', fallbackvoice: !0, service: 'g1', gender: 'female',
      }, { name: 'Raquel Compact' }, { name: 'Luciana' }, { name: 'pt-BR', rate: 0.25 }, {
        name: 'Fallback Brazilian Portuguese Female', lang: 'pt-BR', fallbackvoice: !0, service: 'g1', gender: 'female',
      }, { name: 'Joana Compact' }, { name: 'Joana' }, { name: 'pt-PT', rate: 0.25 }, {
        name: 'Fallback Portuguese',
        lang: 'pt-PT',
        fallbackvoice: !0,
        service: 'g1',
        gender: 'female',
      }, {
        name: 'Fallback Serbo-Croation', lang: 'sh', fallbackvoice: !0, service: 'g2', gender: 'male',
      }, { name: 'Laura Compact' }, { name: 'Laura' }, { name: 'sk-SK', rate: 0.25 }, {
        name: 'Fallback Slovak', lang: 'sk', fallbackvoice: !0, service: 'g1', gender: 'female',
      }, { name: 'Javier Compact' }, { name: 'Paulina' }, { name: 'es-MX', rate: 0.25 }, {
        name: 'Fallback Spanish (Latin American) Female', lang: 'es-419', fallbackvoice: !0, service: 'g1', gender: 'female',
      }, {
        name: 'Fallback Swahili', lang: 'sw', fallbackvoice: !0, service: 'g1', gender: 'male',
      },
      {
        name: 'Fallback Tamil', lang: 'ta', fallbackvoice: !0, service: 'g1', gender: 'male',
      }, { name: 'Narisa Compact' }, { name: 'Kanya' }, { name: 'th-TH', rate: 0.25 }, {
        name: 'Fallback Thai Female', lang: 'th', fallbackvoice: !0, service: 'g1', gender: 'female',
      }, {
        name: 'Fallback Vietnamese Male', lang: 'vi', fallbackvoice: !0, service: 'g3', gender: 'male',
      }, {
        name: 'Fallback Welsh', lang: 'cy', fallbackvoice: !0, service: 'g1', gender: 'male',
      }, { name: 'Oskar Compact' }, { name: 'sv-SE', rate: 0.25 }, { name: 'Simona Compact' }, { name: 'Ioana' }, { name: 'ro-RO', rate: 0.25 },
      { name: 'Kyoko' }, { name: 'Lekha' }, { name: 'Ting-Ting' }, { name: 'Yuna' }, { name: 'Xander Compact' }, { name: 'nl-NL', rate: 0.25 }, {
        name: 'Fallback UK English Male', lang: 'en-GB', fallbackvoice: !0, service: 'g1', voicename: 'rjs', gender: 'male',
      }, {
        name: 'Finnish Male', lang: 'fi', fallbackvoice: !0, service: 'g3', voicename: '', gender: 'male',
      }, {
        name: 'Czech Male', lang: 'cs', fallbackvoice: !0, service: 'g3', voicename: '', gender: 'male',
      }, {
        name: 'Danish Male', lang: 'da', fallbackvoice: !0, service: 'g3', voicename: '', gender: 'male',
      }, {
        name: 'Greek Male',
        lang: 'el',
        fallbackvoice: !0,
        service: 'g3',
        voicename: '',
        gender: 'male',
      }, {
        name: 'Hungarian Male', lang: 'hu', fallbackvoice: !0, service: 'g3', voicename: '', gender: 'male',
      }, {
        name: 'Latin Male', lang: 'la', fallbackvoice: !0, service: 'g1', voicename: '', gender: 'male',
      }, {
        name: 'Norwegian Male', lang: 'no', fallbackvoice: !0, service: 'g3', voicename: '', gender: 'male',
      }, {
        name: 'Slovak Male', lang: 'sk', fallbackvoice: !0, service: 'g3', voicename: '', gender: 'male',
      }, {
        name: 'Swedish Male', lang: 'sv', fallbackvoice: !0, service: 'g3', voicename: '', gender: 'male',
      },
      {
        name: 'Fallback US English Male', lang: 'en-US', fallbackvoice: !0, service: 'g3', voicename: '', gender: 'male',
      }, { name: 'German Germany', lang: 'de_DE' }, { name: 'English United Kingdom', lang: 'en_GB' }, { name: 'English India', lang: 'en_IN' }, { name: 'English United States', lang: 'en_US' }, { name: 'Spanish Spain', lang: 'es_ES' }, { name: 'Spanish Mexico', lang: 'es_MX' }, { name: 'Spanish United States', lang: 'es_US' }, { name: 'French Belgium', lang: 'fr_BE' }, { name: 'French France', lang: 'fr_FR' }, { name: 'Hindi India', lang: 'hi_IN' }, {
        name: 'Indonesian Indonesia',
        lang: 'in_ID',
      }, { name: 'Italian Italy', lang: 'it_IT' }, { name: 'Japanese Japan', lang: 'ja_JP' }, { name: 'Korean South Korea', lang: 'ko_KR' }, { name: 'Dutch Netherlands', lang: 'nl_NL' }, { name: 'Polish Poland', lang: 'pl_PL' }, { name: 'Portuguese Brazil', lang: 'pt_BR' }, { name: 'Portuguese Portugal', lang: 'pt_PT' }, { name: 'Russian Russia', lang: 'ru_RU' }, { name: 'Thai Thailand', lang: 'th_TH' }, { name: 'Turkish Turkey', lang: 'tr_TR' }, { name: 'Chinese China', lang: 'zh_CN_#Hans' }, { name: 'Chinese Hong Kong', lang: 'zh_HK_#Hans' }, {
        name: 'Chinese Hong Kong',
        lang: 'zh_HK_#Hant',
      }, { name: 'Chinese Taiwan', lang: 'zh_TW_#Hant' }, { name: 'Alex' }, { name: 'Maged', lang: 'ar-SA' }, { name: 'Zuzana', lang: 'cs-CZ' }, { name: 'Sara', lang: 'da-DK' }, { name: 'Anna', lang: 'de-DE' }, { name: 'Melina', lang: 'el-GR' }, { name: 'Karen', lang: 'en-AU' }, { name: 'Daniel', lang: 'en-GB' }, { name: 'Moira', lang: 'en-IE' }, { name: 'Samantha (Enhanced)', lang: 'en-US' }, { name: 'Samantha', lang: 'en-US' }, { name: 'Tessa', lang: 'en-ZA' }, { name: 'Monica', lang: 'es-ES' }, { name: 'Paulina', lang: 'es-MX' }, { name: 'Satu', lang: 'fi-FI' }, {
        name: 'Amelie',
        lang: 'fr-CA',
      }, { name: 'Thomas', lang: 'fr-FR' }, { name: 'Carmit', lang: 'he-IL' }, { name: 'Lekha', lang: 'hi-IN' }, { name: 'Mariska', lang: 'hu-HU' }, { name: 'Damayanti', lang: 'id-ID' }, { name: 'Alice', lang: 'it-IT' }, { name: 'Kyoko', lang: 'ja-JP' }, { name: 'Yuna', lang: 'ko-KR' }, { name: 'Ellen', lang: 'nl-BE' }, { name: 'Xander', lang: 'nl-NL' }, { name: 'Nora', lang: 'no-NO' }, { name: 'Zosia', lang: 'pl-PL' }, { name: 'Luciana', lang: 'pt-BR' }, { name: 'Joana', lang: 'pt-PT' }, { name: 'Ioana', lang: 'ro-RO' }, { name: 'Milena', lang: 'ru-RU' }, { name: 'Laura', lang: 'sk-SK' }, {
        name: 'Alva',
        lang: 'sv-SE',
      }, { name: 'Kanya', lang: 'th-TH' }, { name: 'Yelda', lang: 'tr-TR' }, { name: 'Ting-Ting', lang: 'zh-CN' }, { name: 'Sin-Ji', lang: 'zh-HK' }, { name: 'Mei-Jia', lang: 'zh-TW' }, { name: 'Microsoft David Mobile - English (United States)', lang: 'en-US' }, { name: 'Microsoft Zira Mobile - English (United States)', lang: 'en-US' }, { name: 'Microsoft Mark Mobile - English (United States)', lang: 'en-US' }, { name: 'native', lang: '' }, { name: 'Google espa\u00f1ol' }, { name: 'Google espa\u00f1ol de Estados Unidos' }, { name: 'Google fran\u00e7ais' },
      { name: 'Google Bahasa Indonesia' }, { name: 'Google italiano' }, { name: 'Google Nederlands' }, { name: 'Google polski' }, { name: 'Google portugu\u00eas do Brasil' }, { name: 'Google \u0440\u0443\u0441\u0441\u043a\u0438\u0439' }, { name: 'Google \u0939\u093f\u0928\u094d\u0926\u0940' }, { name: 'Google \u65e5\u672c\u8a9e' }, { name: 'Google \u666e\u901a\u8bdd\uff08\u4e2d\u56fd\u5927\u9646\uff09' }, { name: 'Google \u7ca4\u8a9e\uff08\u9999\u6e2f\uff09' }, { name: 'zh-HK', rate: 0.25 }, {
        name: 'Fallback Chinese (Hong Kong) Female',
        lang: 'zh-HK',
        fallbackvoice: !0,
        service: 'g1',
        gender: 'female',
      }, { name: 'Google \u7ca4\u8a9e\uff08\u9999\u6e2f\uff09' }, { name: 'zh-TW', rate: 0.25 }, {
        name: 'Fallback Chinese (Taiwan) Female', lang: 'zh-TW', fallbackvoice: !0, service: 'g1', gender: 'female',
      }, { name: 'Microsoft George Mobile - English (United Kingdom)', lang: 'en-GB' }, { name: 'Microsoft Susan Mobile - English (United Kingdom)', lang: 'en-GB' }, { name: 'Microsoft Hazel Mobile - English (United Kingdom)', lang: 'en-GB' }, { name: 'Microsoft Heera Mobile - English (India)', lang: 'en-In' },
      { name: 'Microsoft Irina Mobile - Russian (Russia)', lang: 'ru-RU' }, { name: 'Microsoft Hedda Mobile - German (Germany)', lang: 'de-DE' }, { name: 'Microsoft Katja Mobile - German (Germany)', lang: 'de-DE' }, { name: 'Microsoft Helena Mobile - Spanish (Spain)', lang: 'es-ES' }, { name: 'Microsoft Laura Mobile - Spanish (Spain)', lang: 'es-ES' }, { name: 'Microsoft Sabina Mobile - Spanish (Mexico)', lang: 'es-MX' }, { name: 'Microsoft Julie Mobile - French (France)', lang: 'fr-FR' }, { name: 'Microsoft Paulina Mobile - Polish (Poland)', lang: 'pl-PL' },
      { name: 'Microsoft Huihui Mobile - Chinese (Simplified, PRC)', lang: 'zh-CN' }, { name: 'Microsoft Yaoyao Mobile - Chinese (Simplified, PRC)', lang: 'zh-CN' }, { name: 'Microsoft Tracy Mobile - Chinese (Traditional, Hong Kong S.A.R.)', lang: 'zh-CN' }, { name: 'Microsoft Elsa Mobile - Italian (Italy)', lang: 'it-IT' }, { name: 'Microsoft Maria Mobile - Portuguese (Brazil)', lang: 'pt-BR' }, { name: 'Microsoft Ayumi Mobile - Japanese (Japan)', lang: 'ja-JP' }, { name: 'Microsoft Haruka Mobile - Japanese (Japan)', lang: 'ja-JP' }, {
        name: 'Helena',
        lang: 'de-DE',
      }, { name: 'Catherine', lang: 'en-AU' }, { name: 'Arthur', lang: 'en-GB' }, { name: 'Martha', lang: 'en-GB' }, { name: 'Marie', lang: 'fr-FR' }, { name: 'O-ren', lang: 'ja-JP' }, { name: 'Yu-shu', lang: 'zh-CN' }, { name: 'Microsoft David - English (United States)', lang: 'en-US' }, { name: 'Microsoft Zira - English (United States)', lang: 'en-US' }, { name: 'Microsoft Mark - English (United States)', lang: 'en-US' }, { name: 'Microsoft George - English (United Kingdom)', lang: 'en-GB' }, { name: 'Microsoft Susan - English (United Kingdom)', lang: 'en-GB' },
      { name: 'Microsoft Hazel - English (United Kingdom)', lang: 'en-GB' }, { name: 'Microsoft Heera - English (India)', lang: 'en-In' }, { name: 'Microsoft Irina - Russian (Russia)', lang: 'ru-RU' }, { name: 'Microsoft Hedda - German (Germany)', lang: 'de-DE' }, { name: 'Microsoft Katja - German (Germany)', lang: 'de-DE' }, { name: 'Microsoft Helena - Spanish (Spain)', lang: 'es-ES' }, { name: 'Microsoft Laura - Spanish (Spain)', lang: 'es-ES' }, { name: 'Microsoft Sabina - Spanish (Mexico)', lang: 'es-MX' }, {
        name: 'Microsoft Julie - French (France)',
        lang: 'fr-FR',
      }, { name: 'Microsoft Paulina - Polish (Poland)', lang: 'pl-PL' }, { name: 'Microsoft Huihui - Chinese (Simplified, PRC)', lang: 'zh-CN' }, { name: 'Microsoft Yaoyao - Chinese (Simplified, PRC)', lang: 'zh-CN' }, { name: 'Microsoft Tracy - Chinese (Traditional, Hong Kong S.A.R.)', lang: 'zh-CN' }, { name: 'Microsoft Elsa - Italian (Italy)', lang: 'it-IT' }, { name: 'Microsoft Maria - Portuguese (Brazil)', lang: 'pt-BR' }, { name: 'Microsoft Ayumi - Japanese (Japan)', lang: 'ja-JP' }, {
        name: 'Microsoft Haruka - Japanese (Japan)',
        lang: 'ja-JP',
      }, { name: 'Microsoft Hortense - French (France)', lang: 'fr-FR' }, { name: 'Microsoft Hanhan - Chinese (Traditional, Taiwan)', lang: 'zh-TW' }, { name: 'Microsoft Heami - Korean (Korean)', lang: 'ko-KR' }, { name: 'Microsoft Stefan - German (Germany)', lang: 'de-DE' }, { name: 'Microsoft Ravi - English (India)', lang: 'en-IN' }, { name: 'Microsoft Pablo - Spanish (Spain)', lang: 'es-ES' }, { name: 'Microsoft Raul - Spanish (Mexico)', lang: 'es-MX' }, { name: 'Microsoft Paul - French (France)', lang: 'fr-FR' }, {
        name: 'Microsoft Cosimo - Italian (Italy)',
        lang: 'it-IT',
      }, { name: 'Microsoft Ichiro - Japanese (Japan)', lang: 'ja-JP' }, { name: 'Microsoft Adam - Polish (Poland)', lang: 'pl-PL' }, { name: 'Microsoft Daniel - Portuguese (Brazil)', lang: 'pt-BR' }, { name: 'Microsoft Pavel - Russian (Russia)', lang: 'ru-RU' }, { name: 'Microsoft Kangkang - Chinese (Simplified, PRC)', lang: 'zh-CN' }, { name: 'Microsoft Danny - Chinese (Traditional, Hong Kong S.A.R.)', lang: 'zh-HK' }, { name: 'Microsoft Yating - Chinese (Traditional, Taiwan)', lang: 'zh-TW' }, {
        name: 'Microsoft Zhiwei - Chinese (Traditional, Taiwan)',
        lang: 'zh-TW',
      }, { name: 'Microsoft Hortense Mobile - French (France)', lang: 'fr-FR' }, { name: 'Microsoft Hanhan Mobile - Chinese (Traditional, Taiwan)', lang: 'zh-TW' }, { name: 'Microsoft Heami Mobile - Korean (Korean)', lang: 'ko-KR' }, { name: 'Microsoft Stefan Mobile - German (Germany)', lang: 'de-DE' }, { name: 'Microsoft Ravi Mobile - English (India)', lang: 'en-IN' }, { name: 'Microsoft Pablo Mobile - Spanish (Spain)', lang: 'es-ES' }, { name: 'Microsoft Raul Mobile - Spanish (Mexico)', lang: 'es-MX' }, {
        name: 'Microsoft Paul Mobile - French (France)',
        lang: 'fr-FR',
      }, { name: 'Microsoft Cosimo Mobile - Italian (Italy)', lang: 'it-IT' }, { name: 'Microsoft Ichiro Mobile - Japanese (Japan)', lang: 'ja-JP' }, { name: 'Microsoft Adam Mobile - Polish (Poland)', lang: 'pl-PL' }, { name: 'Microsoft Daniel Mobile - Portuguese (Brazil)', lang: 'pt-BR' }, { name: 'Microsoft Pavel Mobile - Russian (Russia)', lang: 'ru-RU' }, { name: 'Microsoft Kangkang Mobile - Chinese (Simplified, PRC)', lang: 'zh-CN' }, { name: 'Microsoft Danny Mobile - Chinese (Traditional, Hong Kong S.A.R.)', lang: 'zh-HK' }, {
        name: 'Microsoft Yating Mobile - Chinese (Traditional, Taiwan)',
        lang: 'zh-TW',
      }, { name: 'Microsoft Zhiwei Mobile - Chinese (Traditional, Taiwan)', lang: 'zh-TW' }, { name: 'Microsoft David Desktop - English (United States)', lang: 'en-US' }, { name: 'Microsoft Zira Desktop - English (United States)', lang: 'en-US' }, { name: 'Microsoft Mark Desktop - English (United States)', lang: 'en-US' }, { name: 'Microsoft George Desktop - English (United Kingdom)', lang: 'en-GB' }, { name: 'Microsoft Susan Desktop - English (United Kingdom)', lang: 'en-GB' }, {
        name: 'Microsoft Hazel Desktop - English (United Kingdom)',
        lang: 'en-GB',
      }, { name: 'Microsoft Heera Desktop - English (India)', lang: 'en-In' }, { name: 'Microsoft Irina Desktop - Russian (Russia)', lang: 'ru-RU' }, { name: 'Microsoft Hedda Desktop - German (Germany)', lang: 'de-DE' }, { name: 'Microsoft Katja Desktop - German (Germany)', lang: 'de-DE' }, { name: 'Microsoft Helena Desktop - Spanish (Spain)', lang: 'es-ES' }, { name: 'Microsoft Laura Desktop - Spanish (Spain)', lang: 'es-ES' }, { name: 'Microsoft Sabina Desktop - Spanish (Mexico)', lang: 'es-MX' }, {
        name: 'Microsoft Julie Desktop - French (France)',
        lang: 'fr-FR',
      }, { name: 'Microsoft Paulina Desktop - Polish (Poland)', lang: 'pl-PL' }, { name: 'Microsoft Huihui Desktop - Chinese (Simplified, PRC)', lang: 'zh-CN' }, { name: 'Microsoft Yaoyao Desktop - Chinese (Simplified, PRC)', lang: 'zh-CN' }, { name: 'Microsoft Tracy Desktop - Chinese (Traditional, Hong Kong S.A.R.)', lang: 'zh-CN' }, { name: 'Microsoft Elsa Desktop - Italian (Italy)', lang: 'it-IT' }, { name: 'Microsoft Maria Desktop - Portuguese (Brazil)', lang: 'pt-BR' }, { name: 'Microsoft Ayumi Desktop - Japanese (Japan)', lang: 'ja-JP' },
      { name: 'Microsoft Haruka Desktop - Japanese (Japan)', lang: 'ja-JP' }, { name: 'Microsoft Hortense Desktop - French (France)', lang: 'fr-FR' }, { name: 'Microsoft Hanhan Desktop - Chinese (Traditional, Taiwan)', lang: 'zh-TW' }, { name: 'Microsoft Heami Desktop - Korean (Korean)', lang: 'ko-KR' }, { name: 'Microsoft Stefan Desktop - German (Germany)', lang: 'de-DE' }, { name: 'Microsoft Ravi Desktop - English (India)', lang: 'en-IN' }, { name: 'Microsoft Pablo Desktop - Spanish (Spain)', lang: 'es-ES' }, {
        name: 'Microsoft Raul Desktop - Spanish (Mexico)',
        lang: 'es-MX',
      }, { name: 'Microsoft Paul Desktop - French (France)', lang: 'fr-FR' }, { name: 'Microsoft Cosimo Desktop - Italian (Italy)', lang: 'it-IT' }, { name: 'Microsoft Ichiro Desktop - Japanese (Japan)', lang: 'ja-JP' }, { name: 'Microsoft Adam Desktop - Polish (Poland)', lang: 'pl-PL' }, { name: 'Microsoft Daniel Desktop - Portuguese (Brazil)', lang: 'pt-BR' }, { name: 'Microsoft Pavel Desktop - Russian (Russia)', lang: 'ru-RU' }, { name: 'Microsoft Kangkang Desktop - Chinese (Simplified, PRC)', lang: 'zh-CN' }, {
        name: 'Microsoft Danny Desktop - Chinese (Traditional, Hong Kong S.A.R.)',
        lang: 'zh-HK',
      }, { name: 'Microsoft Yating Desktop - Chinese (Traditional, Taiwan)', lang: 'zh-TW' }, { name: 'Microsoft Zhiwei Desktop - Chinese (Traditional, Taiwan)', lang: 'zh-TW' }, { name: 'Martin', lang: 'de-DE' }, { name: 'Daniel', lang: 'fr-FR' }, { name: 'Hattori', lang: 'ja-JP' }, { name: 'Li-mu', lang: 'zh-CN' }, { name: 'Gordon', lang: 'en-AU' }, { name: 'Aaron', lang: 'en-US' }, { name: 'Nicky', lang: 'en-US' }, { name: 'Microsoft Hanhan Desktop - Chinese (Taiwan)', lang: 'zh-TW' }, { name: 'Microsoft Heami Desktop - Korean', lang: 'ko-KR' }, {
        name: 'Fallback Australian Male',
        lang: 'en-AU',
        fallbackvoice: !0,
        service: 'g3',
        gender: 'male',
      }, {
        name: 'Fallback Russian Male', lang: 'ru', fallbackvoice: !0, service: 'g3', gender: 'male',
      }, {
        name: 'Fallback Arabic Male', lang: 'ar', fallbackvoice: !0, service: 'g3', gender: 'male',
      }, {
        name: 'Fallback Chinese', lang: 'zh-CN', fallbackvoice: !0, service: 'g3', gender: 'male',
      }, {
        name: 'Fallback Chinese HK', lang: 'zh-HK', fallbackvoice: !0, service: 'g3', gender: 'male',
      }, {
        name: 'Fallback Chinese TW', lang: 'zh-TW', fallbackvoice: !0, service: 'g3', gender: 'male',
      }, {
        name: 'Fallback French Male',
        lang: 'fr',
        fallbackvoice: !0,
        service: 'g3',
        gender: 'male',
      }, {
        name: 'Fallback Deutsch Male', lang: 'de', fallbackvoice: !0, service: 'g3', gender: 'male',
      }, {
        name: 'Fallback Hindi Male', lang: 'hi', fallbackvoice: !0, service: 'g3', gender: 'male',
      }, {
        name: 'Fallback Indonesian Male', lang: 'id', fallbackvoice: !0, service: 'g3', gender: 'male',
      }, {
        name: 'Fallback Japanese Male', lang: 'ja', fallbackvoice: !0, service: 'g3', gender: 'male',
      }, {
        name: 'Fallback Korean Male', lang: 'ko', fallbackvoice: !0, service: 'g3', gender: 'male',
      }, {
        name: 'Fallback Polish Male',
        lang: 'pl',
        fallbackvoice: !0,
        service: 'g1',
        gender: 'male',
      }, {
        name: 'Fallback Brazilian Portuguese Male', lang: 'pt-BR', fallbackvoice: !0, service: 'g3', gender: 'male',
      }, {
        name: 'Fallback Portuguese Male', lang: 'pt-PT', fallbackvoice: !0, service: 'g1', gender: 'male',
      }, {
        name: 'Fallback Spanish Male', lang: 'es', fallbackvoice: !0, service: 'g3', gender: 'male',
      }, {
        name: 'Fallback Spanish (Latin American) Male', lang: 'es-419', fallbackvoice: !0, service: 'g3', gender: 'male',
      }, {
        name: 'Fallback Thai Male',
        lang: 'th',
        fallbackvoice: !0,
        service: 'g3',
        gender: 'male',
      }, {
        name: 'Fallback Turkish Male', lang: 'tr', fallbackvoice: !0, service: 'g3', gender: 'male',
      }, {
        name: 'Fallback Vietnamese Female', lang: 'vi', fallbackvoice: !0, service: 'g1', gender: 'female',
      }, {
        name: 'Fallback Italian Male', lang: 'it', fallbackvoice: !0, service: 'g3', gender: 'male',
      }, {
        name: 'Fallback Dutch Male', lang: 'nl', fallbackvoice: !0, timerSpeed: 0, service: 'g3', gender: 'male',
      }, { name: 'Microsoft Anna - English (United States)', lang: 'en-US', gender: 'female' }, {
        name: 'Microsoft Lili - Chinese (China)',
        lang: 'zh-CN',
        gender: 'female',
      }, { name: 'Bangla Bangladesh', lang: 'bn_BD', gender: 'male' }, { name: 'Bangla India', lang: 'bn_IN', gender: 'male' }, { name: 'Czech Czechia', lang: 'cs_CZ', gender: 'female' }, { name: 'Danish Denmark', lang: 'da_DK', gender: 'female' }, { name: 'Greek Greece', lang: 'el_GR', gender: 'female' }, { name: 'English Australia', lang: 'en_AU', gender: 'female' }, { name: 'Estonian Estonia', lang: 'et_EE', gender: 'male' }, { name: 'Finnish Finland', lang: 'fi_FI', gender: 'female' }, { name: 'Filipino Philippines', lang: 'fil_PH', gender: 'female' }, {
        name: 'French Canada',
        lang: 'fr_CAF',
        gender: 'female',
      }, { name: 'Hungarian Hungary', lang: 'hu_HU', gender: 'female' }, { name: 'Khmer Cambodia', lang: 'km_KH', gender: 'female' }, { name: 'Norwegian Bokm\u00e5l Norway', lang: 'nb_NO', gender: 'female' }, { name: 'Nepali Nepal', lang: 'ne_NP', gender: 'female' }, { name: 'Romanian Romania', lang: 'ro_RO', gender: 'female' }, { name: 'Sinhala Sri Lanka', lang: 'si_LK', gender: 'female' }, { name: 'Slovak Slovakia', lang: 'sk_SK', gender: 'female' }, { name: 'Swedish Sweden', lang: 'sv_SE', gender: 'female' }, {
        name: 'Ukrainian Ukraine',
        lang: 'uk_UA',
        gender: 'female',
      }, { name: 'Vietnamese Vietnam', lang: 'vi_VN', gender: 'female' }, { name: 'Cantonese Hong Kong', lang: 'yue_HK_#Hant', gender: 'female' }, { name: 'Microsoft Server Speech Text to Speech Voice (en-US, Guy24kRUS)', lang: 'en-US', gender: 'male' }, { name: 'Microsoft Server Speech Text to Speech Voice (en-US, Jessa24kRUS)', lang: 'en-US', gender: 'female' }, { name: 'Microsoft Server Speech Text to Speech Voice (en-US, JessaRUS)', lang: 'en-US', gender: 'female' }, {
        name: 'Microsoft Server Speech Text to Speech Voice (en-US, ZiraRUS)',
        lang: 'en-US',
        gender: 'female',
      }, {
        name: 'Fallback Bangla Bangladeh Female', lang: 'bn-BD', fallbackvoice: !0, timerSpeed: 0, service: 'g3', gender: 'female',
      }, {
        name: 'Fallback Bangla Bangladeh Male', lang: 'bn-BD', fallbackvoice: !0, timerSpeed: 0, service: 'g3', gender: 'male',
      }, {
        name: 'Fallback Filipino Female', lang: 'fil-PH', fallbackvoice: !0, timerSpeed: 0, service: 'g3', gender: 'female',
      }, {
        name: 'Fallback Filipino Male', lang: 'fil-PH', fallbackvoice: !0, timerSpeed: 0, service: 'g3', gender: 'male',
      }, {
        name: 'Fallback Cambodian Khmer Female',
        lang: 'km-KH',
        fallbackvoice: !0,
        timerSpeed: 0,
        service: 'g3',
        gender: 'female',
      }, {
        name: 'Fallback Cambodian Khmer Male', lang: 'km-KH', fallbackvoice: !0, timerSpeed: 0, service: 'g3', gender: 'male',
      }, {
        name: 'Fallback Nepali Female', lang: 'ne-NP', fallbackvoice: !0, timerSpeed: 0, service: 'g3', gender: 'female',
      }, {
        name: 'Fallback Sinhala Female', lang: 'si-LK', fallbackvoice: !0, timerSpeed: 0, service: 'g3', gender: 'female',
      }, {
        name: 'Fallback Ukrainian Female', lang: 'uk-UA', fallbackvoice: !0, timerSpeed: 0, service: 'g3', gender: 'female',
      }, {
        name: 'Fallback Cantonese Hong Kong Female',
        lang: 'yue-HK',
        fallbackvoice: !0,
        timerSpeed: 0,
        service: 'g3',
        gender: 'female',
      }, {
        name: 'Fallback Cantonese Hong Kong Male', lang: 'yue-HK', fallbackvoice: !0, timerSpeed: 0, service: 'g3', gender: 'male',
      }, {
        name: 'Fallback Estonian Male', lang: 'et-EE', fallbackvoice: !0, timerSpeed: 0, service: 'g3', gender: 'male',
      }, {
        name: 'Fallback Bangla India Female', lang: 'bn-IN', fallbackvoice: !0, timerSpeed: 0, service: 'g3', gender: 'female',
      }, {
        name: 'Fallback Bangla India Male', lang: 'bn-IN', fallbackvoice: !0, timerSpeed: 0, service: 'g3', gender: 'male',
      },
      {
        name: 'Fallback French Canadian Female', lang: 'fr-CA', fallbackvoice: !0, timerSpeed: 0, service: 'g3', gender: 'female',
      }, {
        name: 'Fallback French Canadian Male', lang: 'fr-CA', fallbackvoice: !0, timerSpeed: 0, service: 'g3', gender: 'male',
      }, {
        name: 'Fallback Tamil', lang: 'ta', fallbackvoice: !0, service: 'g1', gender: 'female',
      }]; a.iOS = /(iPad|iPhone|iPod)/g.test(navigator.userAgent); a.iOS9 = /(iphone|ipod|ipad).* os 9_/.test(navigator.userAgent.toLowerCase()); a.iOS10 = /(iphone|ipod|ipad).* os 10_/.test(navigator.userAgent.toLowerCase());
      a.iOS11 = /(iphone|ipod|ipad).* os 11_/.test(navigator.userAgent.toLowerCase()); a.iOS9plus = /(iphone|ipod|ipad).* os 10_/.test(navigator.userAgent.toLowerCase()) || /(iphone|ipod|ipad).* os 10_/.test(navigator.userAgent.toLowerCase()); a.iOS12_0 = /(iphone|ipod|ipad).* os 12_0/.test(navigator.userAgent.toLowerCase()); a.iOS12 = /(iphone|ipod|ipad).* os 12_/.test(navigator.userAgent.toLowerCase()); a.iOS13_0 = /(iphone|ipod|ipad).* os 13_0/.test(navigator.userAgent.toLowerCase()); a.iOS13 = /(iphone|ipod|ipad).* os 13/.test(navigator.userAgent.toLowerCase());
      a.is_chrome = navigator.userAgent.indexOf('Chrome') > -1; a.is_safari = navigator.userAgent.indexOf('Safari') > -1; a.is_chrome && a.is_safari && (a.is_safari = !1); a.is_opera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0; a.is_android = navigator.userAgent.toLowerCase().indexOf('android') > -1; a.iOS_initialized = !1; a.iOS9_initialized = !1; a.iOS10_initialized = !1; a.iOS11_initialized = !1; a.cache_ios_voices = [{ name: 'he-IL', voiceURI: 'he-IL', lang: 'he-IL' }, { name: 'th-TH', voiceURI: 'th-TH', lang: 'th-TH' }, {
        name: 'pt-BR',
        voiceURI: 'pt-BR',
        lang: 'pt-BR',
      }, { name: 'sk-SK', voiceURI: 'sk-SK', lang: 'sk-SK' }, { name: 'fr-CA', voiceURI: 'fr-CA', lang: 'fr-CA' }, { name: 'ro-RO', voiceURI: 'ro-RO', lang: 'ro-RO' }, { name: 'no-NO', voiceURI: 'no-NO', lang: 'no-NO' }, { name: 'fi-FI', voiceURI: 'fi-FI', lang: 'fi-FI' }, { name: 'pl-PL', voiceURI: 'pl-PL', lang: 'pl-PL' }, { name: 'de-DE', voiceURI: 'de-DE', lang: 'de-DE' }, { name: 'nl-NL', voiceURI: 'nl-NL', lang: 'nl-NL' }, { name: 'id-ID', voiceURI: 'id-ID', lang: 'id-ID' }, { name: 'tr-TR', voiceURI: 'tr-TR', lang: 'tr-TR' }, { name: 'it-IT', voiceURI: 'it-IT', lang: 'it-IT' },
      { name: 'pt-PT', voiceURI: 'pt-PT', lang: 'pt-PT' }, { name: 'fr-FR', voiceURI: 'fr-FR', lang: 'fr-FR' }, { name: 'ru-RU', voiceURI: 'ru-RU', lang: 'ru-RU' }, { name: 'es-MX', voiceURI: 'es-MX', lang: 'es-MX' }, { name: 'zh-HK', voiceURI: 'zh-HK', lang: 'zh-HK' }, { name: 'sv-SE', voiceURI: 'sv-SE', lang: 'sv-SE' }, { name: 'hu-HU', voiceURI: 'hu-HU', lang: 'hu-HU' }, { name: 'zh-TW', voiceURI: 'zh-TW', lang: 'zh-TW' }, { name: 'es-ES', voiceURI: 'es-ES', lang: 'es-ES' }, { name: 'zh-CN', voiceURI: 'zh-CN', lang: 'zh-CN' }, { name: 'nl-BE', voiceURI: 'nl-BE', lang: 'nl-BE' }, {
        name: 'en-GB',
        voiceURI: 'en-GB',
        lang: 'en-GB',
      }, { name: 'ar-SA', voiceURI: 'ar-SA', lang: 'ar-SA' }, { name: 'ko-KR', voiceURI: 'ko-KR', lang: 'ko-KR' }, { name: 'cs-CZ', voiceURI: 'cs-CZ', lang: 'cs-CZ' }, { name: 'en-ZA', voiceURI: 'en-ZA', lang: 'en-ZA' }, { name: 'en-AU', voiceURI: 'en-AU', lang: 'en-AU' }, { name: 'da-DK', voiceURI: 'da-DK', lang: 'da-DK' }, { name: 'en-US', voiceURI: 'en-US', lang: 'en-US' }, { name: 'en-IE', voiceURI: 'en-IE', lang: 'en-IE' }, { name: 'hi-IN', voiceURI: 'hi-IN', lang: 'hi-IN' }, { name: 'el-GR', voiceURI: 'el-GR', lang: 'el-GR' }, {
        name: 'ja-JP',
        voiceURI: 'ja-JP',
        lang: 'ja-JP',
      }]; a.cache_ios9_voices = [{
        name: 'Maged', voiceURI: 'com.apple.ttsbundle.Maged-compact', lang: 'ar-SA', localService: !0, default: !0,
      }, {
        name: 'Zuzana', voiceURI: 'com.apple.ttsbundle.Zuzana-compact', lang: 'cs-CZ', localService: !0, default: !0,
      }, {
        name: 'Sara', voiceURI: 'com.apple.ttsbundle.Sara-compact', lang: 'da-DK', localService: !0, default: !0,
      }, {
        name: 'Anna', voiceURI: 'com.apple.ttsbundle.Anna-compact', lang: 'de-DE', localService: !0, default: !0,
      }, {
        name: 'Melina',
        voiceURI: 'com.apple.ttsbundle.Melina-compact',
        lang: 'el-GR',
        localService: !0,
        default: !0,
      }, {
        name: 'Karen', voiceURI: 'com.apple.ttsbundle.Karen-compact', lang: 'en-AU', localService: !0, default: !0,
      }, {
        name: 'Daniel', voiceURI: 'com.apple.ttsbundle.Daniel-compact', lang: 'en-GB', localService: !0, default: !0,
      }, {
        name: 'Moira', voiceURI: 'com.apple.ttsbundle.Moira-compact', lang: 'en-IE', localService: !0, default: !0,
      }, {
        name: 'Samantha (Enhanced)', voiceURI: 'com.apple.ttsbundle.Samantha-premium', lang: 'en-US', localService: !0, default: !0,
      }, {
        name: 'Samantha',
        voiceURI: 'com.apple.ttsbundle.Samantha-compact',
        lang: 'en-US',
        localService: !0,
        default: !0,
      }, {
        name: 'Tessa', voiceURI: 'com.apple.ttsbundle.Tessa-compact', lang: 'en-ZA', localService: !0, default: !0,
      }, {
        name: 'Monica', voiceURI: 'com.apple.ttsbundle.Monica-compact', lang: 'es-ES', localService: !0, default: !0,
      }, {
        name: 'Paulina', voiceURI: 'com.apple.ttsbundle.Paulina-compact', lang: 'es-MX', localService: !0, default: !0,
      }, {
        name: 'Satu', voiceURI: 'com.apple.ttsbundle.Satu-compact', lang: 'fi-FI', localService: !0, default: !0,
      }, {
        name: 'Amelie',
        voiceURI: 'com.apple.ttsbundle.Amelie-compact',
        lang: 'fr-CA',
        localService: !0,
        default: !0,
      }, {
        name: 'Thomas', voiceURI: 'com.apple.ttsbundle.Thomas-compact', lang: 'fr-FR', localService: !0, default: !0,
      }, {
        name: 'Carmit', voiceURI: 'com.apple.ttsbundle.Carmit-compact', lang: 'he-IL', localService: !0, default: !0,
      }, {
        name: 'Lekha', voiceURI: 'com.apple.ttsbundle.Lekha-compact', lang: 'hi-IN', localService: !0, default: !0,
      }, {
        name: 'Mariska', voiceURI: 'com.apple.ttsbundle.Mariska-compact', lang: 'hu-HU', localService: !0, default: !0,
      }, {
        name: 'Damayanti',
        voiceURI: 'com.apple.ttsbundle.Damayanti-compact',
        lang: 'id-ID',
        localService: !0,
        default: !0,
      }, {
        name: 'Alice', voiceURI: 'com.apple.ttsbundle.Alice-compact', lang: 'it-IT', localService: !0, default: !0,
      }, {
        name: 'Kyoko', voiceURI: 'com.apple.ttsbundle.Kyoko-compact', lang: 'ja-JP', localService: !0, default: !0,
      }, {
        name: 'Yuna', voiceURI: 'com.apple.ttsbundle.Yuna-compact', lang: 'ko-KR', localService: !0, default: !0,
      }, {
        name: 'Ellen', voiceURI: 'com.apple.ttsbundle.Ellen-compact', lang: 'nl-BE', localService: !0, default: !0,
      }, {
        name: 'Xander',
        voiceURI: 'com.apple.ttsbundle.Xander-compact',
        lang: 'nl-NL',
        localService: !0,
        default: !0,
      }, {
        name: 'Nora', voiceURI: 'com.apple.ttsbundle.Nora-compact', lang: 'no-NO', localService: !0, default: !0,
      }, {
        name: 'Zosia', voiceURI: 'com.apple.ttsbundle.Zosia-compact', lang: 'pl-PL', localService: !0, default: !0,
      }, {
        name: 'Luciana', voiceURI: 'com.apple.ttsbundle.Luciana-compact', lang: 'pt-BR', localService: !0, default: !0,
      }, {
        name: 'Joana', voiceURI: 'com.apple.ttsbundle.Joana-compact', lang: 'pt-PT', localService: !0, default: !0,
      }, {
        name: 'Ioana',
        voiceURI: 'com.apple.ttsbundle.Ioana-compact',
        lang: 'ro-RO',
        localService: !0,
        default: !0,
      }, {
        name: 'Milena', voiceURI: 'com.apple.ttsbundle.Milena-compact', lang: 'ru-RU', localService: !0, default: !0,
      }, {
        name: 'Laura', voiceURI: 'com.apple.ttsbundle.Laura-compact', lang: 'sk-SK', localService: !0, default: !0,
      }, {
        name: 'Alva', voiceURI: 'com.apple.ttsbundle.Alva-compact', lang: 'sv-SE', localService: !0, default: !0,
      }, {
        name: 'Kanya', voiceURI: 'com.apple.ttsbundle.Kanya-compact', lang: 'th-TH', localService: !0, default: !0,
      }, {
        name: 'Yelda',
        voiceURI: 'com.apple.ttsbundle.Yelda-compact',
        lang: 'tr-TR',
        localService: !0,
        default: !0,
      }, {
        name: 'Ting-Ting', voiceURI: 'com.apple.ttsbundle.Ting-Ting-compact', lang: 'zh-CN', localService: !0, default: !0,
      }, {
        name: 'Sin-Ji', voiceURI: 'com.apple.ttsbundle.Sin-Ji-compact', lang: 'zh-HK', localService: !0, default: !0,
      }, {
        name: 'Mei-Jia', voiceURI: 'com.apple.ttsbundle.Mei-Jia-compact', lang: 'zh-TW', localService: !0, default: !0,
      }]; a.cache_ios10_voices = [{ name: 'Maged', voiceURI: 'com.apple.ttsbundle.Maged-compact', lang: 'ar-SA' }, {
        name: 'Zuzana',
        voiceURI: 'com.apple.ttsbundle.Zuzana-compact',
        lang: 'cs-CZ',
      }, { name: 'Sara', voiceURI: 'com.apple.ttsbundle.Sara-compact', lang: 'da-DK' }, { name: 'Anna', voiceURI: 'com.apple.ttsbundle.Anna-compact', lang: 'de-DE' }, { name: 'Helena', voiceURI: 'com.apple.ttsbundle.siri_female_de-DE_compact', lang: 'de-DE' }, { name: 'Martin', voiceURI: 'com.apple.ttsbundle.siri_male_de-DE_compact', lang: 'de-DE' }, { name: 'Nikos (Enhanced)', voiceURI: 'com.apple.ttsbundle.Nikos-premium', lang: 'el-GR' }, { name: 'Melina', voiceURI: 'com.apple.ttsbundle.Melina-compact', lang: 'el-GR' }, {
        name: 'Nikos',
        voiceURI: 'com.apple.ttsbundle.Nikos-compact',
        lang: 'el-GR',
      }, { name: 'Catherine', voiceURI: 'com.apple.ttsbundle.siri_female_en-AU_compact', lang: 'en-AU' }, { name: 'Gordon', voiceURI: 'com.apple.ttsbundle.siri_male_en-AU_compact', lang: 'en-AU' }, { name: 'Karen', voiceURI: 'com.apple.ttsbundle.Karen-compact', lang: 'en-AU' }, { name: 'Daniel (Enhanced)', voiceURI: 'com.apple.ttsbundle.Daniel-premium', lang: 'en-GB' }, { name: 'Arthur', voiceURI: 'com.apple.ttsbundle.siri_male_en-GB_compact', lang: 'en-GB' }, { name: 'Daniel', voiceURI: 'com.apple.ttsbundle.Daniel-compact', lang: 'en-GB' },
      { name: 'Martha', voiceURI: 'com.apple.ttsbundle.siri_female_en-GB_compact', lang: 'en-GB' }, { name: 'Moira', voiceURI: 'com.apple.ttsbundle.Moira-compact', lang: 'en-IE' }, { name: 'Nicky (Enhanced)', voiceURI: 'com.apple.ttsbundle.siri_female_en-US_premium', lang: 'en-US' }, { name: 'Samantha (Enhanced)', voiceURI: 'com.apple.ttsbundle.Samantha-premium', lang: 'en-US' }, { name: 'Aaron', voiceURI: 'com.apple.ttsbundle.siri_male_en-US_compact', lang: 'en-US' }, { name: 'Fred', voiceURI: 'com.apple.speech.synthesis.voice.Fred', lang: 'en-US' },
      { name: 'Nicky', voiceURI: 'com.apple.ttsbundle.siri_female_en-US_compact', lang: 'en-US' }, { name: 'Samantha', voiceURI: 'com.apple.ttsbundle.Samantha-compact', lang: 'en-US' }, { name: 'Tessa', voiceURI: 'com.apple.ttsbundle.Tessa-compact', lang: 'en-ZA' }, { name: 'Monica', voiceURI: 'com.apple.ttsbundle.Monica-compact', lang: 'es-ES' }, { name: 'Paulina', voiceURI: 'com.apple.ttsbundle.Paulina-compact', lang: 'es-MX' }, { name: 'Satu', voiceURI: 'com.apple.ttsbundle.Satu-compact', lang: 'fi-FI' }, {
        name: 'Amelie',
        voiceURI: 'com.apple.ttsbundle.Amelie-compact',
        lang: 'fr-CA',
      }, { name: 'Daniel', voiceURI: 'com.apple.ttsbundle.siri_male_fr-FR_compact', lang: 'fr-FR' }, { name: 'Marie', voiceURI: 'com.apple.ttsbundle.siri_female_fr-FR_compact', lang: 'fr-FR' }, { name: 'Thomas', voiceURI: 'com.apple.ttsbundle.Thomas-compact', lang: 'fr-FR' }, { name: 'Carmit', voiceURI: 'com.apple.ttsbundle.Carmit-compact', lang: 'he-IL' }, { name: 'Lekha', voiceURI: 'com.apple.ttsbundle.Lekha-compact', lang: 'hi-IN' }, { name: 'Mariska', voiceURI: 'com.apple.ttsbundle.Mariska-compact', lang: 'hu-HU' }, {
        name: 'Damayanti',
        voiceURI: 'com.apple.ttsbundle.Damayanti-compact',
        lang: 'id-ID',
      }, { name: 'Alice', voiceURI: 'com.apple.ttsbundle.Alice-compact', lang: 'it-IT' }, { name: 'Hattori', voiceURI: 'com.apple.ttsbundle.siri_male_ja-JP_compact', lang: 'ja-JP' }, { name: 'Kyoko', voiceURI: 'com.apple.ttsbundle.Kyoko-compact', lang: 'ja-JP' }, { name: 'O-ren', voiceURI: 'com.apple.ttsbundle.siri_female_ja-JP_compact', lang: 'ja-JP' }, { name: 'Yuna', voiceURI: 'com.apple.ttsbundle.Yuna-compact', lang: 'ko-KR' }, {
        name: 'Ellen',
        voiceURI: 'com.apple.ttsbundle.Ellen-compact',
        lang: 'nl-BE',
      }, { name: 'Xander', voiceURI: 'com.apple.ttsbundle.Xander-compact', lang: 'nl-NL' }, { name: 'Nora', voiceURI: 'com.apple.ttsbundle.Nora-compact', lang: 'no-NO' }, { name: 'Zosia', voiceURI: 'com.apple.ttsbundle.Zosia-compact', lang: 'pl-PL' }, { name: 'Luciana', voiceURI: 'com.apple.ttsbundle.Luciana-compact', lang: 'pt-BR' }, { name: 'Joana', voiceURI: 'com.apple.ttsbundle.Joana-compact', lang: 'pt-PT' }, { name: 'Ioana', voiceURI: 'com.apple.ttsbundle.Ioana-compact', lang: 'ro-RO' }, {
        name: 'Milena',
        voiceURI: 'com.apple.ttsbundle.Milena-compact',
        lang: 'ru-RU',
      }, { name: 'Laura', voiceURI: 'com.apple.ttsbundle.Laura-compact', lang: 'sk-SK' }, { name: 'Alva', voiceURI: 'com.apple.ttsbundle.Alva-compact', lang: 'sv-SE' }, { name: 'Kanya', voiceURI: 'com.apple.ttsbundle.Kanya-compact', lang: 'th-TH' }, { name: 'Yelda', voiceURI: 'com.apple.ttsbundle.Yelda-compact', lang: 'tr-TR' }, { name: 'Li-mu', voiceURI: 'com.apple.ttsbundle.siri_male_zh-CN_compact', lang: 'zh-CN' }, { name: 'Ting-Ting', voiceURI: 'com.apple.ttsbundle.Ting-Ting-compact', lang: 'zh-CN' }, {
        name: 'Yu-shu',
        voiceURI: 'com.apple.ttsbundle.siri_female_zh-CN_compact',
        lang: 'zh-CN',
      }, { name: 'Sin-Ji', voiceURI: 'com.apple.ttsbundle.Sin-Ji-compact', lang: 'zh-HK' }, { name: 'Mei-Jia', voiceURI: 'com.apple.ttsbundle.Mei-Jia-compact', lang: 'zh-TW' }]; a.cache_ios11_voices = [{ name: 'Maged', voiceURI: 'com.apple.ttsbundle.Maged-compact', lang: 'ar-SA' }, { name: 'Zuzana', voiceURI: 'com.apple.ttsbundle.Zuzana-compact', lang: 'cs-CZ' }, { name: 'Sara', voiceURI: 'com.apple.ttsbundle.Sara-compact', lang: 'da-DK' }, { name: 'Anna', voiceURI: 'com.apple.ttsbundle.Anna-compact', lang: 'de-DE' }, {
        name: 'Helena',
        voiceURI: 'com.apple.ttsbundle.siri_female_de-DE_compact',
        lang: 'de-DE',
      }, { name: 'Martin', voiceURI: 'com.apple.ttsbundle.siri_male_de-DE_compact', lang: 'de-DE' }, { name: 'Melina', voiceURI: 'com.apple.ttsbundle.Melina-compact', lang: 'el-GR' }, { name: 'Catherine', voiceURI: 'com.apple.ttsbundle.siri_female_en-AU_compact', lang: 'en-AU' }, { name: 'Gordon', voiceURI: 'com.apple.ttsbundle.siri_male_en-AU_compact', lang: 'en-AU' }, { name: 'Karen', voiceURI: 'com.apple.ttsbundle.Karen-compact', lang: 'en-AU' }, { name: 'Arthur', voiceURI: 'com.apple.ttsbundle.siri_male_en-GB_compact', lang: 'en-GB' },
      { name: 'Daniel', voiceURI: 'com.apple.ttsbundle.Daniel-compact', lang: 'en-GB' }, { name: 'Martha', voiceURI: 'com.apple.ttsbundle.siri_female_en-GB_compact', lang: 'en-GB' }, { name: 'Moira', voiceURI: 'com.apple.ttsbundle.Moira-compact', lang: 'en-IE' }, { name: 'Aaron', voiceURI: 'com.apple.ttsbundle.siri_male_en-US_compact', lang: 'en-US' }, { name: 'Fred', voiceURI: 'com.apple.speech.synthesis.voice.Fred', lang: 'en-US' }, { name: 'Nicky', voiceURI: 'com.apple.ttsbundle.siri_female_en-US_compact', lang: 'en-US' }, {
        name: 'Samantha',
        voiceURI: 'com.apple.ttsbundle.Samantha-compact',
        lang: 'en-US',
      }, { name: 'Tessa', voiceURI: 'com.apple.ttsbundle.Tessa-compact', lang: 'en-ZA' }, { name: 'Monica', voiceURI: 'com.apple.ttsbundle.Monica-compact', lang: 'es-ES' }, { name: 'Paulina', voiceURI: 'com.apple.ttsbundle.Paulina-compact', lang: 'es-MX' }, { name: 'Satu', voiceURI: 'com.apple.ttsbundle.Satu-compact', lang: 'fi-FI' }, { name: 'Amelie', voiceURI: 'com.apple.ttsbundle.Amelie-compact', lang: 'fr-CA' }, { name: 'Daniel', voiceURI: 'com.apple.ttsbundle.siri_male_fr-FR_compact', lang: 'fr-FR' }, {
        name: 'Marie',
        voiceURI: 'com.apple.ttsbundle.siri_female_fr-FR_compact',
        lang: 'fr-FR',
      }, { name: 'Thomas', voiceURI: 'com.apple.ttsbundle.Thomas-compact', lang: 'fr-FR' }, { name: 'Carmit', voiceURI: 'com.apple.ttsbundle.Carmit-compact', lang: 'he-IL' }, { name: 'Lekha', voiceURI: 'com.apple.ttsbundle.Lekha-compact', lang: 'hi-IN' }, { name: 'Mariska', voiceURI: 'com.apple.ttsbundle.Mariska-compact', lang: 'hu-HU' }, { name: 'Damayanti', voiceURI: 'com.apple.ttsbundle.Damayanti-compact', lang: 'id-ID' }, { name: 'Alice', voiceURI: 'com.apple.ttsbundle.Alice-compact', lang: 'it-IT' }, {
        name: 'Hattori',
        voiceURI: 'com.apple.ttsbundle.siri_male_ja-JP_compact',
        lang: 'ja-JP',
      }, { name: 'Kyoko', voiceURI: 'com.apple.ttsbundle.Kyoko-compact', lang: 'ja-JP' }, { name: 'O-ren', voiceURI: 'com.apple.ttsbundle.siri_female_ja-JP_compact', lang: 'ja-JP' }, { name: 'Yuna', voiceURI: 'com.apple.ttsbundle.Yuna-compact', lang: 'ko-KR' }, { name: 'Ellen', voiceURI: 'com.apple.ttsbundle.Ellen-compact', lang: 'nl-BE' }, { name: 'Xander', voiceURI: 'com.apple.ttsbundle.Xander-compact', lang: 'nl-NL' }, { name: 'Nora', voiceURI: 'com.apple.ttsbundle.Nora-compact', lang: 'no-NO' }, {
        name: 'Zosia',
        voiceURI: 'com.apple.ttsbundle.Zosia-compact',
        lang: 'pl-PL',
      }, { name: 'Luciana', voiceURI: 'com.apple.ttsbundle.Luciana-compact', lang: 'pt-BR' }, { name: 'Joana', voiceURI: 'com.apple.ttsbundle.Joana-compact', lang: 'pt-PT' }, { name: 'Ioana', voiceURI: 'com.apple.ttsbundle.Ioana-compact', lang: 'ro-RO' }, { name: 'Milena', voiceURI: 'com.apple.ttsbundle.Milena-compact', lang: 'ru-RU' }, { name: 'Laura', voiceURI: 'com.apple.ttsbundle.Laura-compact', lang: 'sk-SK' }, { name: 'Alva', voiceURI: 'com.apple.ttsbundle.Alva-compact', lang: 'sv-SE' }, {
        name: 'Kanya',
        voiceURI: 'com.apple.ttsbundle.Kanya-compact',
        lang: 'th-TH',
      }, { name: 'Yelda', voiceURI: 'com.apple.ttsbundle.Yelda-compact', lang: 'tr-TR' }, { name: 'Li-mu', voiceURI: 'com.apple.ttsbundle.siri_male_zh-CN_compact', lang: 'zh-CN' }, { name: 'Ting-Ting', voiceURI: 'com.apple.ttsbundle.Ting-Ting-compact', lang: 'zh-CN' }, { name: 'Yu-shu', voiceURI: 'com.apple.ttsbundle.siri_female_zh-CN_compact', lang: 'zh-CN' }, { name: 'Sin-Ji', voiceURI: 'com.apple.ttsbundle.Sin-Ji-compact', lang: 'zh-HK' }, { name: 'Mei-Jia', voiceURI: 'com.apple.ttsbundle.Mei-Jia-compact', lang: 'zh-TW' }]; a.systemvoices = null; a.CHARACTER_LIMIT = 100; a.VOICESUPPORT_ATTEMPTLIMIT = 5; a.voicesupport_attempts = 0; a.fallbackMode = !1; a.WORDS_PER_MINUTE = 130; a.fallback_audio = null; a.fallback_playbackrate = 1; a.def_fallback_playbackrate = a.fallback_playbackrate; a.fallback_audiopool = []; a.msgparameters = null; a.timeoutId = null; a.OnLoad_callbacks = []; a.useTimer = !1; a.utterances = []; a.userInteractionEvents = ['mousedown', 'mouseup', 'mousewheel', 'keydown']; a.fallbackBufferLength = 5; var n = null; a.tstCompiled = function () { return !/param/.test((a) => {}); };
      a.fallbackServicePath = `https://code.responsivevoice.org/${a.tstCompiled() ? '' : 'develop/'}getvoice.php`; a.default_rv = a.responsivevoices[0]; a.debug = !1; a.rvsMapped = !1; a.forcedFallbackMode = !1; a.speechAllowedByUser = !0; a.enableEstimationTimeout = !0; a.log = function (b) { a.debug && console.log(b); }; a.init = function () {
        if (a.is_android || a.iOS || a.is_safari)a.useTimer = !0; a.is_opera || typeof speechSynthesis === 'undefined' ? (console.log('RV: Voice synthesis not supported'), a.enableFallbackMode()) : setTimeout(() => {
          var b = setInterval(() => {
            const c = window.speechSynthesis.getVoices(); c.length != 0 || a.systemvoices != null && a.systemvoices.length != 0 ? (console.log('RV: Voice support ready'), a.systemVoicesReady(c), clearInterval(b)) : (console.log('Voice support NOT ready'), a.voicesupport_attempts++, a.voicesupport_attempts > a.VOICESUPPORT_ATTEMPTLIMIT && (clearInterval(b), window.speechSynthesis != null ? a.iOS ? (a.iOS11 || a.iOS12 || a.iOS13_0 || a.iOS13 ? a.systemVoicesReady(a.cache_ios11_voices) : a.iOS10 ? a.systemVoicesReady(a.cache_ios10_voices)
              : a.iOS9 ? a.systemVoicesReady(a.cache_ios9_voices) : a.systemVoicesReady(a.cache_ios_voices), console.log('RV: Voice support ready (cached)')) : (console.log('RV: speechSynthesis present but no system voices found'), a.enableFallbackMode()) : a.enableFallbackMode()));
          }, 100);
        }, 100); (a.iOS || a.is_android || a.is_safari) && a.enableWindowClickHook(); a.Dispatch('OnLoad');
      }; a.systemVoicesReady = function (b) {
        a.systemvoices = b; a.mapRVs(); a.OnVoiceReady != null && a.OnVoiceReady.call(); a.Dispatch('OnReady'); window.hasOwnProperty('dispatchEvent')
&& window.dispatchEvent(new Event('ResponsiveVoice_OnReady'));
      }; a.enableFallbackMode = function () { a.fallbackMode = !0; a.forcedFallbackMode = !0; console.log('RV: Enabling fallback mode'); a.mapRVs(); a.OnVoiceReady != null && a.OnVoiceReady.call(); a.Dispatch('OnReady'); window.hasOwnProperty('dispatchEvent') && window.dispatchEvent(new Event('ResponsiveVoice_OnReady')); a.Dispatch('OnServiceSwitched'); }; a.getVoices = function () { for (var b = [], c = 0; c < a.responsivevoices.length; c++)b.push({ name: a.responsivevoices[c].name }); return b; };
      a.speak = function (b, c, d) {
        if (b == null)a.log('No text provided'); else if (a.initializePermissionsTimeout && clearTimeout(a.initializePermissionsTimeout), a.rvsMapped) {
          let h = null; if (a.isPlaying())a.log('Cancelling previous speech'), a.cancel(), setTimeout(() => { a.speak(b, c, d); }, 50); else {
            if (c == null) { var g = a.default_rv; a.setDefaultVoice(g.name); } else g = a.getResponsiveVoice(c); !0 === g.deprecated && console.warn(`ResponsiveVoice: Voice ${g.name} is deprecated and will be removed in future releases`); let f = {}; if (g.mappedProfile
!= null)f = g.mappedProfile; else if (f.systemvoice = a.getMatchedVoice(g), f.collectionvoice = {}, f.systemvoice == null) { console.log(`RV: ERROR: No voice found for: ${c}`); return; }b = q(b, f); b = b.replace(/["`]/gm, "'"); a.msgparameters = d || {}; a.msgtext = b; a.msgvoicename = c; a.onstartFired = !1; g = []; if (b.length > a.CHARACTER_LIMIT) {
              for (var e = b = p(b); e.length > a.CHARACTER_LIMIT;) {
                var k = e.search(/([:!\u00a1?\u00bf;\(\)\[\]\u2014\u00ab\u00bb\n]+|\.[^0-9]+)/); var l = ''; if (k == -1 || k >= a.CHARACTER_LIMIT)k = e.search(/,[^0-9]+/); if (k
== -1 || k >= a.CHARACTER_LIMIT) { var m = e.split(' '); for (k = 0; k < m.length; k++) { if (l.length + m[k].length + 1 > a.CHARACTER_LIMIT) { m[k].length >= a.CHARACTER_LIMIT && (l += m[k].substr(0, a.CHARACTER_LIMIT - l.length - 1)); break; }l += (k != 0 ? ' ' : '') + m[k]; } } else l = e.substr(0, k + 1); e = e.substr(l.length, e.length - l.length); g.push(l);
              }e.length > 0 && g.push(e);
            } else g.push(b); console.log(g); a.multipartText = g; if (a.checkSpeechAllowed()) {
              a.fallbackMode && a.fallback_audiopool.length > 0 && a.clearFallbackPool(); a.msgprofile = f; a.log(`Voice picked: ${a.msgprofile.systemvoice.name}`);
              a.utterances = []; a.fallbackChunks = []; for (k = 0; k < g.length; k++) {
                if (!a.fallbackMode && a.getServiceEnabled(a.services.NATIVE_TTS)) {
                  a.log('Using SpeechSynthesis'), h = a.services.NATIVE_TTS, e = new SpeechSynthesisUtterance(), e.voiceURI = f.systemvoice.voiceURI, e.volume = a.selectBest([f.collectionvoice.volume, f.systemvoice.volume, 1]), e.rate = a.selectBest([a.iOS9plus ? 1 : null, f.collectionvoice.rate, f.systemvoice.rate, 1]), e.pitch = a.selectBest([f.collectionvoice.pitch, f.systemvoice.pitch, 1]), e.text = g[k], e.lang = a.selectBest([f.collectionvoice.lang,
                    f.systemvoice.lang]), e.rvIndex = k, e.rvTotal = g.length, k == 0 && (e.onstart = a.speech_onstart), a.msgparameters.onendcalled = !1, d != null ? (e.voice = typeof d.voice !== 'undefined' ? d.voice : f.systemvoice, k < g.length - 1 && g.length > 1 ? (e.onend = a.onPartEnd, e.hasOwnProperty('addEventListener') && e.addEventListener('end', a.onPartEnd)) : (e.onend = a.speech_onend, e.hasOwnProperty('addEventListener') && e.addEventListener('end', a.speech_onend)), e.onerror = d.onerror || function (b) { a.log('RV: Unknow Error'); a.log(b); }, d.rate = a.validateParameters(d,
                    'rate'), d.pitch = a.validateParameters(d, 'pitch'), d.volume = a.validateParameters(d, 'volume'), e.onpause = d.onpause, e.onresume = d.onresume, e.onmark = d.onmark, e.onboundary = d.onboundary || a.onboundary, e.pitch = d.pitch != null ? d.pitch : e.pitch, e.rate = a.iOS ? (d.rate != null ? d.rate * d.rate : 1) * e.rate : (d.rate != null ? d.rate : 1) * e.rate, e.volume = d.volume != null ? d.volume : e.volume) : (a.log('No Params received for current Utterance'), e.voice = f.systemvoice, e.onend = a.speech_onend, e.onboundary = a.onboundary, e.onerror = function (b) {
                    a.log('RV: Unknow Error');
                    a.log(b);
                  }), a.utterances.push(e), k == 0 && (a.currentMsg = e), console.log(e), a.tts_speak(e);
                } else if (a.fallbackMode && a.getServiceEnabled(a.services.FALLBACK_AUDIO)) {
                  h = a.services.FALLBACK_AUDIO; a.fallback_playbackrate = a.def_fallback_playbackrate; e = a.selectBest([f.collectionvoice.pitch, f.systemvoice.pitch, 1]); l = a.selectBest([a.iOS9plus ? 1 : null, f.collectionvoice.rate, f.systemvoice.rate, 1]); m = a.selectBest([f.collectionvoice.volume, f.systemvoice.volume, 1]); if (d != null) {
                    e *= d.pitch != null ? d.pitch : 1; l *= d.rate != null
                      ? d.rate : 1; m *= d.volume != null ? d.volume : 1; var n = d.extraParams || null;
                  }e /= 2; l /= 2; m *= 2; e = Math.min(Math.max(e, 0), 1); l = Math.min(Math.max(l, 0), 1); m = Math.min(Math.max(m, 0), 1); e = `${a.fallbackServicePath}?t=${encodeURIComponent(g[k])}&tl=${f.collectionvoice.lang || f.systemvoice.lang || 'en-US'}&sv=${f.collectionvoice.service || f.systemvoice.service || ''}&vn=${f.collectionvoice.voicename || f.systemvoice.voicename || ''}&pitch=${e.toString()}&rate=${l.toString()}&vol=${m.toString()}`; void 0 !== f.collectionvoice.gender
&& (e += `&gender=${f.collectionvoice.gender}`); n && (e += `&extraParams=${JSON.stringify(n)}`); a.fallbackChunks.push({ text: g[k], url: e, audio: null });
                }
              }a.fallbackMode && a.getServiceEnabled(a.services.FALLBACK_AUDIO) && (a.fallbackChunkIndex = 0, a.fallback_startPart()); a.log(`Service used: ${h}`);
            } else a.scheduledSpeak = { text: b, voicename: c, parameters: d };
          }
        } else setTimeout(() => { a.speak(b, c, d); }, 15);
      }; a.startTimeout = function (b, c) {
        let d = a.msgprofile.collectionvoice.timerSpeed; a.msgprofile.collectionvoice.timerSpeed == null && (d = 1); d <= 0 || (a.timeoutId = setTimeout(c, a.getEstimatedTimeLength(b, d)), a.log(`Timeout ID: ${a.timeoutId}`));
      }; a.checkAndCancelTimeout = function () { a.timeoutId != null && (clearTimeout(a.timeoutId), a.timeoutId = null); }; a.speech_timedout = function () { a.cancel(); a.cancelled = !1; a.speech_onend(); }; a.speech_onend = function () {
        a.checkAndCancelTimeout(); !0 === a.cancelled ? a.cancelled = !1 : (a.log('on end fired'), a.msgparameters != null && a.msgparameters.onend != null && a.msgparameters.onendcalled != 1 && (a.log(`Speech on end called  -${a.msgtext}`),
        a.msgparameters.onendcalled = !0, a.msgparameters.onend()));
      }; a.speech_onstart = function () { if (!a.onstartFired && (a.onstartFired = !0, a.log('Speech start'), a.enableEstimationTimeout && a.useTimer && (a.fallbackMode || a.startTimeout(a.msgtext, a.speech_timedout)), a.msgparameters.onendcalled = !1, a.msgparameters != null && a.msgparameters.onstart != null))a.msgparameters.onstart(); }; a.fallback_startPart = function () {
        a.fallbackChunkIndex == 0 && a.speech_onstart(); a.fallback_updateChunksBuffer(); a.fallback_audio = a.fallbackChunks[a.fallbackChunkIndex].audio;
        a.fallback_audio == null ? a.log('RV: Fallback Audio is not available') : ((function () { const b = a.fallback_audio; setTimeout(() => { b.playbackRate = a.fallback_playbackrate; }, 50); b.onloadedmetadata = function () { b.playbackRate = a.fallback_playbackrate; }; if (b.readyState >= 2)b.play(); else { var c = function () { b.play(); b.removeEventListener('canplaythrough', c); }; b.addEventListener('canplaythrough', c, !1); } }()), a.fallback_errors && (a.log('RV: Speech cancelled due to errors'), a.speech_onend()), a.fallback_audio.addEventListener('ended',
          a.fallback_finishPart), a.enableEstimationTimeout && a.useTimer && a.startTimeout(a.multipartText[a.fallbackChunkIndex], a.fallback_finishPart));
      }; a.isFallbackAudioPlaying = function () { let b; for (b = 0; b < a.fallback_audiopool.length; b++) { const c = a.fallback_audiopool[b]; if (!c.paused && !c.ended && c.currentTime != c.duration) return !0; } return !1; }; a.fallback_finishPart = function (b) {
        a.isFallbackAudioPlaying() ? (a.checkAndCancelTimeout(), a.timeoutId = setTimeout(a.fallback_finishPart, 1E3 * (a.fallback_audio.duration - a.fallback_audio.currentTime)))
          : (a.checkAndCancelTimeout(), a.fallbackChunkIndex < a.fallbackChunks.length - 1 ? (a.fallbackChunkIndex++, a.fallback_startPart()) : a.speech_onend());
      }; a.cancel = function () { a.checkAndCancelTimeout(); a.fallbackMode ? (a.fallback_audio != null && a.fallback_audio.pause(), a.clearFallbackPool()) : (a.cancelled = !0, speechSynthesis.cancel()); }; a.voiceSupport = function () { return 'speechSynthesis' in window; }; a.OnFinishedPlaying = function (b) { if (a.msgparameters != null && a.msgparameters.onend != null)a.msgparameters.onend(); }; a.setDefaultVoice = function (b) { if (a.rvsMapped) { const c = a.getResponsiveVoice(b); c != null && (a.default_rv = c); } else setTimeout(() => { a.setDefaultVoice(b); }, 15); }; a.mapRVs = function () {
        if (typeof navigator === 'object') { var b; var c = 'anguage'; var d = navigator; d = (b = d[`l${c}s`], b && b.length ? b : (c = d[`l${c}`] || d[`browserL${c}`] || d[`userL${c}`]) ? [c] : c); } else d = void 0; b = d[0]; for (c = 0; c < a.responsivevoices.length; c++) {
          d = a.responsivevoices[c]; for (let h = 0; h < d.voiceIDs.length; h++) {
            const g = a.voicecollection[d.voiceIDs[h]]; if (g.fallbackvoice != 1) {
              let f = a.getSystemVoice(g.name);
              a.forcedFallbackMode && (f = null); a.iOS12_0 && d.lang.toLowerCase() != b.toLowerCase() && d.lang.toLowerCase().split('-')[0] != b.toLowerCase() && (f = null); if (f != null) { d.mappedProfile = { systemvoice: f, collectionvoice: g }; break; }
            } else { d.mappedProfile = { systemvoice: {}, collectionvoice: g }; break; }
          }
        }a.rvsMapped = !0;
      }; a.getMatchedVoice = function (b) { for (let c = 0; c < b.voiceIDs.length; c++) { const d = a.getSystemVoice(a.voicecollection[b.voiceIDs[c]].name); if (d != null) return d; } return null; }; a.getSystemVoice = function (b) {
        const c = String.fromCharCode(160);
        const d = b.replace(new RegExp(`\\s+|${c}`, 'g'), ''); if (typeof a.systemvoices === 'undefined' || a.systemvoices === null) return null; for (let h = 0; h < a.systemvoices.length; h++) if (a.systemvoices[h].name.localeCompare(b) === 0 || a.systemvoices[h].name.replace(new RegExp(`\\s+|${c}`, 'g'), '').replace(/ *\([^)]*\) */g, '').localeCompare(d) === 0) return a.systemvoices[h]; return null;
      }; a.getResponsiveVoice = function (b) {
        for (let c = 0; c < a.responsivevoices.length; c++) {
          if (a.responsivevoices[c].name == b) {
            return b = a.fallbackMode, a.fallbackMode = !0 === a.responsivevoices[c].mappedProfile.collectionvoice.fallbackvoice || !0 === a.forcedFallbackMode ? !0 : !1, b != a.fallbackMode && (a.mapRVs(), a.Dispatch('OnServiceSwitched')), a.responsivevoices[c];
          }
        } return null;
      }; a.Dispatch = function (b) {
        if (a.hasOwnProperty(`${b}_callbacks`) && a[`${b}_callbacks`] != null && a[`${b}_callbacks`].length > 0) { for (let c = a[`${b}_callbacks`], d = 0; d < c.length; d++)c[d](); return !0; } const h = `${b}_callbacks_timeout`; const g = `${b}_callbacks_timeoutCount`; a.hasOwnProperty(h) || (a[g] = 10, a[h] = setInterval(() => {
          --a[g];
          (a.Dispatch(b) || a[g] < 0) && clearTimeout(a[h]);
        }, 50)); return !1;
      }; a.AddEventListener = function (b, c) { a.hasOwnProperty(`${b}_callbacks`) || (a[`${b}_callbacks`] = []); a[`${b}_callbacks`].push(c); }; a.addEventListener = a.AddEventListener; a.RemoveEventListener = function (b, c) { a[`${b}_callbacks`] && a[`${b}_callbacks`].indexOf(c) != -1 && a[`${b}_callbacks`].splice(a[`${b}_callbacks`].indexOf(c), 1); }; a.clickEvent = function () {
        a.log('Click event'); a.click_event_detected = !0; a.initializePermissionsTimeout = setTimeout(a.initializePermissions, 5);
        a.userInteractionEvents.forEach((b) => { window.removeEventListener(b, a.clickEvent, !1); }); a.Dispatch('OnClickEvent');
      }; a.initializePermissions = function () { if (a.iOS && !a.iOS_initialized) { a.log('Initializing iOS click event'); var b = new SpeechSynthesisUtterance(' '); speechSynthesis.speak(b); a.iOS_initialized = !0; }a.is_android && !a.android_initialized && (a.log('Initializing Android click event'), b = new SpeechSynthesisUtterance(' '), speechSynthesis.speak(b)); a.initFallbackPool(); }; a.isPlaying = function () {
        return a.fallbackMode
          ? a.fallback_audio != null && !a.fallback_audio.ended && !a.fallback_audio.paused : speechSynthesis.speaking;
      }; a.clearFallbackPool = function () { for (let b = 0; b < a.fallback_audiopool.length; b++)a.fallback_audiopool[b] != null && (a.fallback_audiopool[b].pause(), a.fallback_audiopool[b].src = ''); a.fallback_audiopool_index = 0; a.fallbackChunks = []; }; a.initFallbackPool = function () {
        if (!a.fallback_audiopool || a.fallback_audiopool.length == 0) {
          for (let b = 0; b < 10; b++) {
            const c = b; const d = document.createElement('AUDIO'); d.preload = 'auto'; a.is_android
&& (d.src = '', d.load(), c == 9 && (a.log('Android HTML audio initialized'), a.android_initialized = !0)); a.iOS && (d.src = '', d.load(), c == 9 && (a.log('iOS HTML audio initialized'), a.iOS_initialized = !0)); a.fallback_audiopool.push(d);
          }a.fallback_audiopool_index = 0;
        }
      }; a.allowSpeechClicked = function (b) {
        a.allowSpeechDiv.parentNode.removeChild(a.allowSpeechDiv); a.allowSpeechDiv = null; if (a.speechAllowedByUser = b) {
          a.clickEvent(), a.scheduledSpeak && (a.speak(a.scheduledSpeak.text, a.scheduledSpeak.voicename, a.scheduledSpeak.parameters),
          a.scheduledSpeak = null);
        }a.Dispatch('OnAllowSpeechClicked');
      }; a.checkSpeechAllowed = function (b) {
        if (a.speechAllowedByUser == 0) return !1; if ((a.is_android || a.iOS || a.is_safari && (a.fallbackMode || a.forcedFallbackMode)) && !a.click_event_detected) {
          if (a.allowSpeechDiv) return; a.allowSpeechDiv_appearances = a.allowSpeechDiv_appearances == null ? 1 : ++a.allowSpeechDiv_appearances; if (a.allowSpeechDiv_appearances > 2) return console.log('ResponsiveVoice: Speech not allowed by user'), !1; const c = document.createElement('style'); c.innerHTML = '.rvNotification{position:fixed;background-color:#fff;text-align:center;font-family:-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-weight:400;line-height:1.5;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);z-index:10000;width:100vw;left:0;bottom:0;font-size:1rem;padding-bottom:.5em;padding-right:.5em}.rvButtonRow{padding-right:2em;padding-bottom:1em;text-align:right;font-size:medium}.rvButton{cursor:pointer;display:inline-block;margin-left:1em;padding:.8em 2em;border-radius:3px;font-size:small}.rvButtonAllow{border:none;background-color:#2b8cff;color:#fff}.rvButtonDeny{border:1px solid #2b8cff;color:#2b8cff;background-color:#fff}.rvTextRow{padding-top:1em;padding-bottom:2em}@media (min-width:576px){.rvNotification{width:60vw;left:20vw}}@media (min-width:768px){.rvNotification{width:50vw;left:25vw}}@media (min-width:992px){.rvNotification{width:40vw;left:30vw}}@media (min-width:1200px){.rvNotification{width:30vw;left:35vw}}';
          document.body.appendChild(c); a.allowSpeechDiv = document.createElement('div'); a.allowSpeechDiv.classList.add('rvNotification'); void 0 == b && (b = {}); a.allowSpeechDiv.innerHTML = `<div class="rvTextRow"><strong>${void 0 != b.urlOverride ? b.urlOverride : window.location.hostname}</strong> ${void 0 != b.textOverride ? b.textOverride : 'wants to play speech'}</div><div class="rvButtonRow"><div onclick="responsiveVoice.allowSpeechClicked(false);" class="rvButton rvButtonDeny">DENY</div><div onclick="responsiveVoice.allowSpeechClicked(true);" class="rvButton rvButtonAllow">ALLOW</div></div>`;
          document.body.appendChild(a.allowSpeechDiv); return !1;
        } return !0;
      }; a.fallback_audioPool_getAudio = function () { a.initFallbackPool(); a.fallback_audiopool_index >= a.fallback_audiopool.length && (a.fallback_audiopool_index = 0); return a.fallback_audiopool[a.fallback_audiopool_index++]; }; a.fallback_updateChunksBuffer = function () {
        for (let b = a.fallbackChunkIndex; b < Math.min(a.fallbackChunks.length, a.fallbackChunkIndex + a.fallbackBufferLength); b++) {
          const c = a.fallbackChunks[b]; c.audio == null && (c.audio = a.fallback_audioPool_getAudio(),
          c.audio.src = c.url, c.audio.playbackRate = a.fallback_playbackrate, c.audio.preload = 'auto', c.audio.load());
        }
      }; a.selectBest = function (a) { for (let b = 0; b < a.length; b++) if (a[b] != null) return a[b]; return null; }; a.pause = function () { a.fallbackMode ? a.fallback_audio != null && a.fallback_audio.pause() : speechSynthesis.pause(); }; a.resume = function () { a.fallbackMode ? a.fallback_audio != null && a.fallback_audio.play() : speechSynthesis.resume(); }; a.tts_speak = function (b) { setTimeout(() => { a.cancelled = !1; speechSynthesis.speak(b); }, 0.01); };
      a.setVolume = function (b) { if (a.isPlaying()) if (a.fallbackMode) { for (var c = 0; c < a.fallback_audiopool.length; c++)a.fallback_audiopool[c].volume = b; a.fallback_audio.volume = b; } else for (c = 0; c < a.utterances.length; c++)a.utterances[c].volume = b; }; a.onPartEnd = function (b) { if (a.msgparameters != null && a.msgparameters.onchuckend != null)a.msgparameters.onchuckend(); a.Dispatch('OnPartEnd'); b = a.utterances.indexOf(b.utterance); a.currentMsg = a.utterances[b + 1]; }; a.onboundary = function (b) {
        a.log('On Boundary'); a.iOS && !a.onstartFired
&& a.speech_onstart();
      }; a.numToWords = function (b) {
        function c(a) { if (Array.isArray(a)) { for (var b = 0, c = Array(a.length); b < a.length; b++)c[b] = a[b]; return c; } return Array.from(a); } const d = (function () {
          return function (a, b) {
            if (Array.isArray(a)) return a; if (Symbol.iterator in Object(a)) { const c = []; let d = !0; let e = !1; let f = void 0; try { for (var g = a[Symbol.iterator](), h; !(d = (h = g.next()).done) && (c.push(h.value), !b || c.length !== b); d = !0); } catch (u) { e = !0, f = u; } finally { try { if (!d && g.return)g.return(); } finally { if (e) throw f; } } return c; } throw new TypeError('Invalid attempt to destructure non-iterable instance');
          };
        }()); const h = function (a) { return a.length === 0; }; const g = function (a) { return function (b) { return b.slice(0, a); }; }; const f = function (a) { return function (b) { return b.slice(a); }; }; const e = function (a) { return a.slice(0).reverse(); }; const k = function (a) { return function (b) { return function (c) { return a(b(c)); }; }; }; const l = function (a) { return !a; }; const m = function t(a) { return function (b) { return h(b) ? [] : [g(a)(b)].concat(c(t(a)(f(a)(b)))); }; }; const n = ' one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen'.split(' ');
        const r = '  twenty thirty forty fifty sixty seventy eighty ninety'.split(' '); const p = ' thousand million billion trillion quadrillion quintillion sextillion septillion octillion nonillion'.split(' '); const q = function (a) { let b = d(a, 3); a = b[0]; const c = b[1]; b = b[2]; return [(Number(b) || 0) === 0 ? '' : `${n[b]} hundred `, (Number(a) || 0) === 0 ? r[c] : r[c] && `${r[c]} ` || '', n[c + a] || n[a]].join(''); }; const v = function (a, b) { return a === '' ? a : `${a} ${p[b]}`; }; return typeof b === 'number' ? a.numToWords(String(b)) : b === '0' ? 'zero' : k(m(3))(e)(Array.from(b)).map(q).map(v).filter(k(l)(h))
          .reverse()
          .join(' ')
          .trim();
      };
      a.getWords = function (b) { b = b.replace(/$|\u00a5|\u20a1|\u20ac|\u00a3|\u20aa|\u20b9|\uffe5|\u17db|\u20a9|\u20a6|\u0e3f|\u20b4|\u20ab/gi, ' dummy currency '); let c = b.split(/(\s*[\s,]\s*|\?|;|:|\.|\(|\)|!)/); c = c.filter(a => /[^\s]/.test(a)); for (let d = 0; d < c.length; d++)(b = c[d].toString().match(/\d+/)) != null && (c.splice(d, 1), a.numToWords(+b[0]).split(/\s+/).map((a) => { c.push(a); })); return c; }; a.getEstimatedTimeLength = function (b, c) {
        const d = a.getWords(b); let h = 0; const g = a.fallbackMode ? 1300 : 700; c = c || 1; d.map((a,
          b) => { h += (a.toString().match(/[^ ]/igm) || a).length; }); const f = d.length; let e = 60 / a.WORDS_PER_MINUTE * c * 1E3 * f; f < 5 && (e = c * (g + 50 * h)); a.log(`Estimated time length: ${e} ms, words: [${d}], charsCount: ${h}`); return e;
      }; a.validateParameters = function (a, c) { if (typeof a[c] === 'undefined') return a[c]; switch (c) { case 'rate': case 'pitch': case 'volume': var b = Number(a[c]); isNaN(b) && console.warn(`ResponsiveVoice: the parameter ${c} has a wrong value "${a[c]}". Defaults were used.`); a[c] = isNaN(b) ? '1' : a[c]; } return a[c]; }; a.services = { NATIVE_TTS: 0, FALLBACK_AUDIO: 1 }; a.servicesPriority = [0, 1]; a.servicesEnabled = []; a.setServiceEnabled = function (b, c) { a.servicesEnabled[b] = c; }; a.getServiceEnabled = function (b) { return a.servicesEnabled[b] || !1; }; a.setServiceEnabled(a.services.NATIVE_TTS, !0); a.setServiceEnabled(a.services.FALLBACK_AUDIO, !0); a.forceFallbackMode = function (b) { a.forcedFallbackMode = b; a.fallbackMode = b; a.mapRVs(); a.Dispatch('OnServiceSwitched'); }; a.enableWindowClickHook = function () {
        a.userInteractionEvents.forEach((b) => {
          window.addEventListener(b,
            a.clickEvent, !1);
        });
      }; a.setTextReplacements = function (a) {
        if (a == null)n = null; else {
          n = []; for (let b = 0; b < a.length; b++) {
            const d = a[b]; let h = d.searchvalue; if (typeof h === 'string') try { const g = h.match(/^\/(.*?)\/([gimy]*)$/); const f = new RegExp(g[1], g[2]); f instanceof RegExp && (h = f); } catch (e) { h = new RegExp(h, 'g'); }n.push({
              searchvalue: h, newvalue: d.newvalue, collectionvoices: d.collectionvoices, systemvoices: d.systemvoices,
            });
          }
        }
      }; document.readyState === 'interactive' ? a.init() : document.addEventListener('DOMContentLoaded', () => { a.init(); });
    };
    var responsiveVoice = new ResponsiveVoice();
  }
  // / -------- RESPONSIVE VOICE ends
  responsiveVoice.debug = true;
}

if (typeof jQuery === 'undefined') {
/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
  !(function (a, b) { typeof module === 'object' && typeof module.exports === 'object' ? module.exports = a.document ? b(a, !0) : function (a) { if (!a.document) throw new Error('jQuery requires a window with a document'); return b(a); } : b(a); }(typeof window !== 'undefined' ? window : this, (a, b) => {
    const c = []; const d = c.slice; const e = c.concat; const f = c.push; const g = c.indexOf; const h = {}; const i = h.toString; const j = h.hasOwnProperty; const k = {}; const l = a.document; const m = '2.1.4'; var n = function (a, b) { return new n.fn.init(a, b); }; const o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g; const p = /^-ms-/; const q = /-([\da-z])/gi; const r = function (a, b) { return b.toUpperCase(); }; n.fn = n.prototype = {
      jquery: m, constructor: n, selector: '', length: 0, toArray() { return d.call(this); }, get(a) { return a != null ? a < 0 ? this[a + this.length] : this[a] : d.call(this); }, pushStack(a) { const b = n.merge(this.constructor(), a); return b.prevObject = this, b.context = this.context, b; }, each(a, b) { return n.each(this, a, b); }, map(a) { return this.pushStack(n.map(this, (b, c) => a.call(b, c, b))); }, slice() { return this.pushStack(d.apply(this, arguments)); }, first() { return this.eq(0); }, last() { return this.eq(-1); }, eq(a) { const b = this.length; const c = +a + (a < 0 ? b : 0); return this.pushStack(c >= 0 && b > c ? [this[c]] : []); }, end() { return this.prevObject || this.constructor(null); }, push: f, sort: c.sort, splice: c.splice,
    }, n.extend = n.fn.extend = function () { let a; let b; let c; let d; let e; let f; let g = arguments[0] || {}; let h = 1; const i = arguments.length; let j = !1; for (typeof g === 'boolean' && (j = g, g = arguments[h] || {}, h++), typeof g === 'object' || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) if ((a = arguments[h]) != null) for (b in a)c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d)); return g; }, n.extend({
      expando: `jQuery${(m + Math.random()).replace(/\D/g, '')}`, isReady: !0, error(a) { throw new Error(a); }, noop() {}, isFunction(a) { return n.type(a) === 'function'; }, isArray: Array.isArray, isWindow(a) { return a != null && a === a.window; }, isNumeric(a) { return !n.isArray(a) && a - parseFloat(a) + 1 >= 0; }, isPlainObject(a) { return n.type(a) !== 'object' || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, 'isPrototypeOf') ? !1 : !0; }, isEmptyObject(a) { let b; for (b in a) return !1; return !0; }, type(a) { return a == null ? `${a}` : typeof a === 'object' || typeof a === 'function' ? h[i.call(a)] || 'object' : typeof a; }, globalEval(a) { let b; const c = eval; a = n.trim(a), a && (a.indexOf('use strict') === 1 ? (b = l.createElement('script'), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a)); }, camelCase(a) { return a.replace(p, 'ms-').replace(q, r); }, nodeName(a, b) { return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase(); }, each(a, b, c) { let d; let e = 0; const f = a.length; const g = s(a); if (c) { if (g) { for (;f > e; e++) if (d = b.apply(a[e], c), d === !1) break; } else for (e in a) if (d = b.apply(a[e], c), d === !1) break; } else if (g) { for (;f > e; e++) if (d = b.call(a[e], e, a[e]), d === !1) break; } else for (e in a) if (d = b.call(a[e], e, a[e]), d === !1) break; return a; }, trim(a) { return a == null ? '' : (`${a}`).replace(o, ''); }, makeArray(a, b) { const c = b || []; return a != null && (s(Object(a)) ? n.merge(c, typeof a === 'string' ? [a] : a) : f.call(c, a)), c; }, inArray(a, b, c) { return b == null ? -1 : g.call(b, a, c); }, merge(a, b) { for (var c = +b.length, d = 0, e = a.length; c > d; d++)a[e++] = b[d]; return a.length = e, a; }, grep(a, b, c) { for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)d = !b(a[f], f), d !== h && e.push(a[f]); return e; }, map(a, b, c) { let d; let f = 0; const g = a.length; const h = s(a); const i = []; if (h) for (;g > f; f++)d = b(a[f], f, c), d != null && i.push(d); else for (f in a)d = b(a[f], f, c), d != null && i.push(d); return e.apply([], i); }, guid: 1, proxy(a, b) { let c; let e; let f; return typeof b === 'string' && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), f = function () { return a.apply(b || this, e.concat(d.call(arguments))); }, f.guid = a.guid = a.guid || n.guid++, f) : void 0; }, now: Date.now, support: k,
    }), n.each('Boolean Number String Function Array Date RegExp Object Error'.split(' '), (a, b) => { h[`[object ${b}]`] = b.toLowerCase(); }); function s(a) { const b = 'length' in a && a.length; const c = n.type(a); return c === 'function' || n.isWindow(a) ? !1 : a.nodeType === 1 && b ? !0 : c === 'array' || b === 0 || typeof b === 'number' && b > 0 && b - 1 in a; } const t = (function (a) {
      let b; let c; let d; let e; let f; let g; let h; let i; let j; let k; let l; let m; let n; let o; let p; let q; let r; let s; let t; const u = `sizzle${1 * new Date()}`; const v = a.document; let w = 0; let x = 0; const y = ha(); const z = ha(); const A = ha(); let B = function (a, b) { return a === b && (l = !0), 0; }; const C = 1 << 31; const D = {}.hasOwnProperty; let E = []; const F = E.pop; const G = E.push; let H = E.push; const I = E.slice; const J = function (a, b) { for (let c = 0, d = a.length; d > c; c++) if (a[c] === b) return c; return -1; }; const K = 'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped'; const L = '[\\x20\\t\\r\\n\\f]'; const M = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+'; const N = M.replace('w', 'w#'); const O = `\\[${L}*(${M})(?:${L}*([*^$|!~]?=)${L}*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(${N}))|)${L}*\\]`; const P = `:(${M})(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|${O})*)|.*)\\)|)`; const Q = new RegExp(`${L}+`, 'g'); const R = new RegExp(`^${L}+|((?:^|[^\\\\])(?:\\\\.)*)${L}+$`, 'g'); const S = new RegExp(`^${L}*,${L}*`); const T = new RegExp(`^${L}*([>+~]|${L})${L}*`); const U = new RegExp(`=${L}*([^\\]'"]*?)${L}*\\]`, 'g'); const V = new RegExp(P); const W = new RegExp(`^${N}$`); const X = {
        ID: new RegExp(`^#(${M})`), CLASS: new RegExp(`^\\.(${M})`), TAG: new RegExp(`^(${M.replace('w', 'w*')})`), ATTR: new RegExp(`^${O}`), PSEUDO: new RegExp(`^${P}`), CHILD: new RegExp(`^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(${L}*(even|odd|(([+-]|)(\\d*)n|)${L}*(?:([+-]|)${L}*(\\d+)|))${L}*\\)|)`, 'i'), bool: new RegExp(`^(?:${K})$`, 'i'), needsContext: new RegExp(`^${L}*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(${L}*((?:-\\d)?\\d*)${L}*\\)|)(?=[^-]|$)`, 'i'),
      }; const Y = /^(?:input|select|textarea|button)$/i; const Z = /^h\d$/i; const $ = /^[^{]+\{\s*\[native \w/; const _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/; const aa = /[+~]/; const ba = /'|\\/g; const ca = new RegExp(`\\\\([\\da-f]{1,6}${L}?|(${L})|.)`, 'ig'); const da = function (a, b, c) { const d = `0x${b}` - 65536; return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320); }; const ea = function () { m(); }; try { H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType; } catch (fa) { H = { apply: E.length ? function (a, b) { G.apply(a, I.call(b)); } : function (a, b) { let c = a.length; let d = 0; while (a[c++] = b[d++]);a.length = c - 1; } }; } function ga(a, b, d, e) { let f; let h; let j; let k; let l; let o; let r; let s; let w; let x; if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, typeof a !== 'string' || !a || k !== 1 && k !== 9 && k !== 11) return d; if (!e && p) { if (k !== 11 && (f = _.exec(a))) if (j = f[1]) { if (k === 9) { if (h = b.getElementById(j), !h || !h.parentNode) return d; if (h.id === j) return d.push(h), d; } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d; } else { if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d; if ((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), d; } if (c.qsa && (!q || !q.test(a))) { if (s = r = u, w = b, x = k !== 1 && a, k === 1 && b.nodeName.toLowerCase() !== 'object') { o = g(a), (r = b.getAttribute('id')) ? s = r.replace(ba, '\\$&') : b.setAttribute('id', s), s = `[id='${s}'] `, l = o.length; while (l--)o[l] = s + ra(o[l]); w = aa.test(a) && pa(b.parentNode) || b, x = o.join(','); } if (x) try { return H.apply(d, w.querySelectorAll(x)), d; } catch (y) {} finally { r || b.removeAttribute('id'); } } } return i(a.replace(R, '$1'), b, d, e); } function ha() { const a = []; function b(c, e) { return a.push(`${c} `) > d.cacheLength && delete b[a.shift()], b[`${c} `] = e; } return b; } function ia(a) { return a[u] = !0, a; } function ja(a) { let b = n.createElement('div'); try { return !!a(b); } catch (c) { return !1; } finally { b.parentNode && b.parentNode.removeChild(b), b = null; } } function ka(a, b) { const c = a.split('|'); let e = a.length; while (e--)d.attrHandle[c[e]] = b; } function la(a, b) { let c = b && a; const d = c && a.nodeType === 1 && b.nodeType === 1 && (~b.sourceIndex || C) - (~a.sourceIndex || C); if (d) return d; if (c) while (c = c.nextSibling) if (c === b) return -1; return a ? 1 : -1; } function ma(a) { return function (b) { const c = b.nodeName.toLowerCase(); return c === 'input' && b.type === a; }; } function na(a) { return function (b) { const c = b.nodeName.toLowerCase(); return (c === 'input' || c === 'button') && b.type === a; }; } function oa(a) { return ia(b => b = +b, ia((c, d) => { let e; const f = a([], c.length, b); let g = f.length; while (g--)c[e = f[g]] && (c[e] = !(d[e] = c[e])); })); } function pa(a) { return a && typeof a.getElementsByTagName !== 'undefined' && a; }c = ga.support = {}, f = ga.isXML = function (a) { const b = a && (a.ownerDocument || a).documentElement; return b ? b.nodeName !== 'HTML' : !1; }, m = ga.setDocument = function (a) { let b; let e; const g = a ? a.ownerDocument || a : v; return g !== n && g.nodeType === 9 && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener('unload', ea, !1) : e.attachEvent && e.attachEvent('onunload', ea)), p = !f(g), c.attributes = ja(a => a.className = 'i', !a.getAttribute('className')), c.getElementsByTagName = ja(a => a.appendChild(g.createComment('')), !a.getElementsByTagName('*').length), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(a => o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length), c.getById ? (d.find.ID = function (a, b) { if (typeof b.getElementById !== 'undefined' && p) { const c = b.getElementById(a); return c && c.parentNode ? [c] : []; } }, d.filter.ID = function (a) { const b = a.replace(ca, da); return function (a) { return a.getAttribute('id') === b; }; }) : (delete d.find.ID, d.filter.ID = function (a) { const b = a.replace(ca, da); return function (a) { const c = typeof a.getAttributeNode !== 'undefined' && a.getAttributeNode('id'); return c && c.value === b; }; }), d.find.TAG = c.getElementsByTagName ? function (a, b) { return typeof b.getElementsByTagName !== 'undefined' ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0; } : function (a, b) { let c; const d = []; let e = 0; const f = b.getElementsByTagName(a); if (a === '*') { while (c = f[e++])c.nodeType === 1 && d.push(c); return d; } return f; }, d.find.CLASS = c.getElementsByClassName && function (a, b) { return p ? b.getElementsByClassName(a) : void 0; }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja((a) => { o.appendChild(a).innerHTML = `<a id='${u}'></a><select id='${u}-\f]' msallowcapture=''><option selected=''></option></select>`, a.querySelectorAll("[msallowcapture^='']").length && q.push(`[*^$]=${L}*(?:''|"")`), a.querySelectorAll('[selected]').length || q.push(`\\[${L}*(?:value|${K})`), a.querySelectorAll(`[id~=${u}-]`).length || q.push('~='), a.querySelectorAll(':checked').length || q.push(':checked'), a.querySelectorAll(`a#${u}+*`).length || q.push('.#.+[+~]'); }), ja((a) => { const b = g.createElement('input'); b.setAttribute('type', 'hidden'), a.appendChild(b).setAttribute('name', 'D'), a.querySelectorAll('[name=d]').length && q.push(`name${L}*[*^$|!~]?=`), a.querySelectorAll(':enabled').length || q.push(':enabled', ':disabled'), a.querySelectorAll('*,:x'), q.push(',.*:'); })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja((a) => { c.disconnectedMatch = s.call(a, 'div'), s.call(a, "[s!='']:x"), r.push('!=', P); }), q = q.length && new RegExp(q.join('|')), r = r.length && new RegExp(r.join('|')), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) { const c = a.nodeType === 9 ? a.documentElement : a; const d = b && b.parentNode; return a === d || !(!d || d.nodeType !== 1 || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d))); } : function (a, b) { if (b) while (b = b.parentNode) if (b === a) return !0; return !1; }, B = b ? function (a, b) { if (a === b) return l = !0, 0; let d = !a.compareDocumentPosition - !b.compareDocumentPosition; return d || (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1); } : function (a, b) { if (a === b) return l = !0, 0; let c; let d = 0; const e = a.parentNode; const f = b.parentNode; const h = [a]; const i = [b]; if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0; if (e === f) return la(a, b); c = a; while (c = c.parentNode)h.unshift(c); c = b; while (c = c.parentNode)i.unshift(c); while (h[d] === i[d])d++; return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0; }, g) : n; }, ga.matches = function (a, b) { return ga(a, null, null, b); }, ga.matchesSelector = function (a, b) { if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try { const d = s.call(a, b); if (d || c.disconnectedMatch || a.document && a.document.nodeType !== 11) return d; } catch (e) {} return ga(b, n, null, [a]).length > 0; }, ga.contains = function (a, b) { return (a.ownerDocument || a) !== n && m(a), t(a, b); }, ga.attr = function (a, b) { (a.ownerDocument || a) !== n && m(a); const e = d.attrHandle[b.toLowerCase()]; let f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0; return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null; }, ga.error = function (a) { throw new Error(`Syntax error, unrecognized expression: ${a}`); }, ga.uniqueSort = function (a) { let b; const d = []; let e = 0; let f = 0; if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) { while (b = a[f++])b === a[f] && (e = d.push(f)); while (e--)a.splice(d[e], 1); } return k = null, a; }, e = ga.getText = function (a) { let b; let c = ''; let d = 0; const f = a.nodeType; if (f) { if (f === 1 || f === 9 || f === 11) { if (typeof a.textContent === 'string') return a.textContent; for (a = a.firstChild; a; a = a.nextSibling)c += e(a); } else if (f === 3 || f === 4) return a.nodeValue; } else while (b = a[d++])c += e(b); return c; }, d = ga.selectors = {
        cacheLength: 50,
        createPseudo: ia,
        match: X,
        attrHandle: {},
        find: {},
        relative: {
          '>': { dir: 'parentNode', first: !0 }, ' ': { dir: 'parentNode' }, '+': { dir: 'previousSibling', first: !0 }, '~': { dir: 'previousSibling' },
        },
        preFilter: { ATTR(a) { return a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || '').replace(ca, da), a[2] === '~=' && (a[3] = ` ${a[3]} `), a.slice(0, 4); }, CHILD(a) { return a[1] = a[1].toLowerCase(), a[1].slice(0, 3) === 'nth' ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * (a[3] === 'even' || a[3] === 'odd')), a[5] = +(a[7] + a[8] || a[3] === 'odd')) : a[3] && ga.error(a[0]), a; }, PSEUDO(a) { let b; const c = !a[6] && a[2]; return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || '' : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(')', c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3)); } },
        filter: {
          TAG(a) { const b = a.replace(ca, da).toLowerCase(); return a === '*' ? function () { return !0; } : function (a) { return a.nodeName && a.nodeName.toLowerCase() === b; }; }, CLASS(a) { let b = y[`${a} `]; return b || (b = new RegExp(`(^|${L})${a}(${L}|$)`)) && y(a, a => b.test(typeof a.className === 'string' && a.className || typeof a.getAttribute !== 'undefined' && a.getAttribute('class') || '')); }, ATTR(a, b, c) { return function (d) { let e = ga.attr(d, a); return e == null ? b === '!=' : b ? (e += '', b === '=' ? e === c : b === '!=' ? e !== c : b === '^=' ? c && e.indexOf(c) === 0 : b === '*=' ? c && e.indexOf(c) > -1 : b === '$=' ? c && e.slice(-c.length) === c : b === '~=' ? (` ${e.replace(Q, ' ')} `).indexOf(c) > -1 : b === '|=' ? e === c || e.slice(0, c.length + 1) === `${c}-` : !1) : !0; }; }, CHILD(a, b, c, d, e) { const f = a.slice(0, 3) !== 'nth'; const g = a.slice(-4) !== 'last'; const h = b === 'of-type'; return d === 1 && e === 0 ? function (a) { return !!a.parentNode; } : function (b, c, i) { let j; let k; let l; let m; let n; let o; let p = f !== g ? 'nextSibling' : 'previousSibling'; const q = b.parentNode; const r = h && b.nodeName.toLowerCase(); const s = !i && !h; if (q) { if (f) { while (p) { l = b; while (l = l[p]) if (h ? l.nodeName.toLowerCase() === r : l.nodeType === 1) return !1; o = p = a === 'only' && !o && 'nextSibling'; } return !0; } if (o = [g ? q.firstChild : q.lastChild], g && s) { k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n]; while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if (l.nodeType === 1 && ++m && l === b) { k[a] = [w, n, m]; break; } } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w)m = j[1]; else while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if ((h ? l.nodeName.toLowerCase() === r : l.nodeType === 1) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break; return m -= e, m === d || m % d === 0 && m / d >= 0; } }; }, PSEUDO(a, b) { let c; const e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error(`unsupported pseudo: ${a}`); return e[u] ? e(b) : e.length > 1 ? (c = [a, a, '', b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia((a, c) => { let d; const f = e(a, b); let g = f.length; while (g--)d = J(a, f[g]), a[d] = !(c[d] = f[g]); }) : function (a) { return e(a, 0, c); }) : e; },
        },
        pseudos: {
          not: ia((a) => { const b = []; const c = []; const d = h(a.replace(R, '$1')); return d[u] ? ia((a, b, c, e) => { let f; const g = d(a, null, e, []); let h = a.length; while (h--)(f = g[h]) && (a[h] = !(b[h] = f)); }) : function (a, e, f) { return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop(); }; }), has: ia(a => function (b) { return ga(a, b).length > 0; }), contains: ia(a => a = a.replace(ca, da), b => (b.textContent || b.innerText || e(b)).indexOf(a) > -1), lang: ia(a => W.test(a || '') || ga.error(`unsupported lang: ${a}`), a = a.replace(ca, da).toLowerCase(), (b) => { let c; do if (c = p ? b.lang : b.getAttribute('xml:lang') || b.getAttribute('lang')) return c = c.toLowerCase(), c === a || c.indexOf(`${a}-`) === 0; while ((b = b.parentNode) && b.nodeType === 1);return !1; }), target(b) { const c = a.location && a.location.hash; return c && c.slice(1) === b.id; }, root(a) { return a === o; }, focus(a) { return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex); }, enabled(a) { return a.disabled === !1; }, disabled(a) { return a.disabled === !0; }, checked(a) { const b = a.nodeName.toLowerCase(); return b === 'input' && !!a.checked || b === 'option' && !!a.selected; }, selected(a) { return a.parentNode && a.parentNode.selectedIndex, a.selected === !0; }, empty(a) { for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1; return !0; }, parent(a) { return !d.pseudos.empty(a); }, header(a) { return Z.test(a.nodeName); }, input(a) { return Y.test(a.nodeName); }, button(a) { const b = a.nodeName.toLowerCase(); return b === 'input' && a.type === 'button' || b === 'button'; }, text(a) { let b; return a.nodeName.toLowerCase() === 'input' && a.type === 'text' && ((b = a.getAttribute('type')) == null || b.toLowerCase() === 'text'); }, first: oa(() => [0]), last: oa((a, b) => [b - 1]), eq: oa((a, b, c) => [c < 0 ? c + b : c]), even: oa((a, b) => { for (let c = 0; b > c; c += 2)a.push(c); return a; }), odd: oa((a, b) => { for (let c = 1; b > c; c += 2)a.push(c); return a; }), lt: oa((a, b, c) => { for (let d = c < 0 ? c + b : c; --d >= 0;)a.push(d); return a; }), gt: oa((a, b, c) => { for (let d = c < 0 ? c + b : c; ++d < b;)a.push(d); return a; }),
        },
      }, d.pseudos.nth = d.pseudos.eq; for (b in {
        radio: !0, checkbox: !0, file: !0, password: !0, image: !0,
      })d.pseudos[b] = ma(b); for (b in { submit: !0, reset: !0 })d.pseudos[b] = na(b); function qa() {}qa.prototype = d.filters = d.pseudos, d.setFilters = new qa(), g = ga.tokenize = function (a, b) { let c; let e; let f; let g; let h; let i; let j; const k = z[`${a} `]; if (k) return b ? 0 : k.slice(0); h = a, i = [], j = d.preFilter; while (h) { (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(R, ' ') }), h = h.slice(c.length)); for (g in d.filter)!(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length)); if (!c) break; } return b ? h.length : h ? ga.error(a) : z(a, i).slice(0); }; function ra(a) { for (var b = 0, c = a.length, d = ''; c > b; b++)d += a[b].value; return d; } function sa(a, b, c) { const d = b.dir; const e = c && d === 'parentNode'; const f = x++; return b.first ? function (b, c, f) { while (b = b[d]) if (b.nodeType === 1 || e) return a(b, c, f); } : function (b, c, g) { let h; let i; const j = [w, f]; if (g) { while (b = b[d]) if ((b.nodeType === 1 || e) && a(b, c, g)) return !0; } else while (b = b[d]) if (b.nodeType === 1 || e) { if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2]; if (i[d] = j, j[2] = a(b, c, g)) return !0; } }; } function ta(a) { return a.length > 1 ? function (b, c, d) { let e = a.length; while (e--) if (!a[e](b, c, d)) return !1; return !0; } : a[0]; } function ua(a, b, c) { for (let d = 0, e = b.length; e > d; d++)ga(a, b[d], c); return c; } function va(a, b, c, d, e) { for (var f, g = [], h = 0, i = a.length, j = b != null; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h)); return g; } function wa(a, b, c, d, e, f) { return d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia((f, g, h, i) => { let j; let k; let l; const m = []; const n = []; const o = g.length; const p = f || ua(b || '*', h.nodeType ? [h] : h, []); const q = !a || !f && b ? p : va(p, m, a, h, i); let r = c ? e || (f ? a : o || d) ? [] : g : q; if (c && c(q, r, h, i), d) { j = va(r, n), d(j, [], h, i), k = j.length; while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l)); } if (f) { if (e || a) { if (e) { j = [], k = r.length; while (k--)(l = r[k]) && j.push(q[k] = l); e(null, r = [], j, i); }k = r.length; while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l)); } } else r = va(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r); }); } function xa(a) { for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[' '], i = g ? 1 : 0, k = sa(a => a === b, h, !0), l = sa(a => J(b, a) > -1, h, !0), m = [function (a, c, d) { const e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d)); return b = null, e; }]; f > i; i++) if (c = d.relative[a[i].type])m = [sa(ta(m), c)]; else { if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) { for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break; return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({ value: a[i - 2].type === ' ' ? '*' : '' })).replace(R, '$1'), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a)); }m.push(c); } return ta(m); } function ya(a, b) { const c = b.length > 0; const e = a.length > 0; const f = function (f, g, h, i, k) { let l; let m; let o; let p = 0; let q = '0'; const r = f && []; let s = []; const t = j; const u = f || e && d.find.TAG('*', k); const v = w += t == null ? 1 : Math.random() || 0.1; const x = u.length; for (k && (j = g !== n && g); q !== x && (l = u[q]) != null; q++) { if (e && l) { m = 0; while (o = a[m++]) if (o(l, g, h)) { i.push(l); break; }k && (w = v); }c && ((l = !o && l) && p--, f && r.push(l)); } if (p += q, c && q !== p) { m = 0; while (o = b[m++])o(r, s, g, h); if (f) { if (p > 0) while (q--)r[q] || s[q] || (s[q] = F.call(i)); s = va(s); }H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i); } return k && (w = v, j = t), r; }; return c ? ia(f) : f; } return h = ga.compile = function (a, b) { let c; const d = []; const e = []; let f = A[`${a} `]; if (!f) { b || (b = g(a)), c = b.length; while (c--)f = xa(b[c]), f[u] ? d.push(f) : e.push(f); f = A(a, ya(e, d)), f.selector = a; } return f; }, i = ga.select = function (a, b, e, f) { let i; let j; let k; let l; let m; const n = typeof a === 'function' && a; const o = !f && g(a = n.selector || a); if (e = e || [], o.length === 1) { if (j = o[0] = o[0].slice(0), j.length > 2 && (k = j[0]).type === 'ID' && c.getById && b.nodeType === 9 && p && d.relative[j[1].type]) { if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0], !b) return e; n && (b = b.parentNode), a = a.slice(j.shift().value.length); }i = X.needsContext.test(a) ? 0 : j.length; while (i--) { if (k = j[i], d.relative[l = k.type]) break; if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) { if (j.splice(i, 1), a = f.length && ra(j), !a) return H.apply(e, f), e; break; } } } return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e; }, c.sortStable = u.split('').sort(B).join('') === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(a => 1 & a.compareDocumentPosition(n.createElement('div'))), ja(a => a.innerHTML = "<a href='#'></a>", a.firstChild.getAttribute('href') === '#') || ka('type|href|height|width', (a, b, c) => (c ? void 0 : a.getAttribute(b, b.toLowerCase() === 'type' ? 1 : 2))), c.attributes && ja(a => a.innerHTML = '<input/>', a.firstChild.setAttribute('value', ''), a.firstChild.getAttribute('value') === '') || ka('value', (a, b, c) => (c || a.nodeName.toLowerCase() !== 'input' ? void 0 : a.defaultValue)), ja(a => a.getAttribute('disabled') == null) || ka(K, (a, b, c) => { let d; return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null; }), ga;
    }(a)); n.find = t, n.expr = t.selectors, n.expr[':'] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains; const u = n.expr.match.needsContext; const v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/; const w = /^.[^:#\[\.,]*$/; function x(a, b, c) { if (n.isFunction(b)) return n.grep(a, (a, d) => !!b.call(a, d, a) !== c); if (b.nodeType) return n.grep(a, a => a === b !== c); if (typeof b === 'string') { if (w.test(b)) return n.filter(b, a, c); b = n.filter(b, a); } return n.grep(a, a => g.call(b, a) >= 0 !== c); }n.filter = function (a, b, c) { const d = b[0]; return c && (a = `:not(${a})`), b.length === 1 && d.nodeType === 1 ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, a => a.nodeType === 1)); }, n.fn.extend({
      find(a) { let b; const c = this.length; let d = []; const e = this; if (typeof a !== 'string') return this.pushStack(n(a).filter(function () { for (b = 0; c > b; b++) if (n.contains(e[b], this)) return !0; })); for (b = 0; c > b; b++)n.find(a, e[b], d); return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? `${this.selector} ${a}` : a, d; }, filter(a) { return this.pushStack(x(this, a || [], !1)); }, not(a) { return this.pushStack(x(this, a || [], !0)); }, is(a) { return !!x(this, typeof a === 'string' && u.test(a) ? n(a) : a || [], !1).length; },
    }); let y; const z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/; const A = n.fn.init = function (a, b) { let c; let d; if (!a) return this; if (typeof a === 'string') { if (c = a[0] === '<' && a[a.length - 1] === '>' && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a); if (c[1]) { if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), v.test(c[1]) && n.isPlainObject(b)) for (c in b)n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]); return this; } return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = l, this.selector = a, this; } return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? typeof y.ready !== 'undefined' ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this)); }; A.prototype = n.fn, y = n(l); const B = /^(?:parents|prev(?:Until|All))/; const C = {
      children: !0, contents: !0, next: !0, prev: !0,
    }; n.extend({ dir(a, b, c) { const d = []; const e = void 0 !== c; while ((a = a[b]) && a.nodeType !== 9) if (a.nodeType === 1) { if (e && n(a).is(c)) break; d.push(a); } return d; }, sibling(a, b) { for (var c = []; a; a = a.nextSibling)a.nodeType === 1 && a !== b && c.push(a); return c; } }), n.fn.extend({
      has(a) { const b = n(a, this); const c = b.length; return this.filter(function () { for (let a = 0; c > a; a++) if (n.contains(this, b[a])) return !0; }); }, closest(a, b) { for (var c, d = 0, e = this.length, f = [], g = u.test(a) || typeof a !== 'string' ? n(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : c.nodeType === 1 && n.find.matchesSelector(c, a))) { f.push(c); break; } return this.pushStack(f.length > 1 ? n.unique(f) : f); }, index(a) { return a ? typeof a === 'string' ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1; }, add(a, b) { return this.pushStack(n.unique(n.merge(this.get(), n(a, b)))); }, addBack(a) { return this.add(a == null ? this.prevObject : this.prevObject.filter(a)); },
    }); function D(a, b) { while ((a = a[b]) && a.nodeType !== 1);return a; }n.each({
      parent(a) { const b = a.parentNode; return b && b.nodeType !== 11 ? b : null; }, parents(a) { return n.dir(a, 'parentNode'); }, parentsUntil(a, b, c) { return n.dir(a, 'parentNode', c); }, next(a) { return D(a, 'nextSibling'); }, prev(a) { return D(a, 'previousSibling'); }, nextAll(a) { return n.dir(a, 'nextSibling'); }, prevAll(a) { return n.dir(a, 'previousSibling'); }, nextUntil(a, b, c) { return n.dir(a, 'nextSibling', c); }, prevUntil(a, b, c) { return n.dir(a, 'previousSibling', c); }, siblings(a) { return n.sibling((a.parentNode || {}).firstChild, a); }, children(a) { return n.sibling(a.firstChild); }, contents(a) { return a.contentDocument || n.merge([], a.childNodes); },
    }, (a, b) => { n.fn[a] = function (c, d) { let e = n.map(this, b, c); return a.slice(-5) !== 'Until' && (d = c), d && typeof d === 'string' && (e = n.filter(d, e)), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e); }; }); const E = /\S+/g; const F = {}; function G(a) { const b = F[a] = {}; return n.each(a.match(E) || [], (a, c) => { b[c] = !0; }), b; }n.Callbacks = function (a) {
      a = typeof a === 'string' ? F[a] || G(a) : n.extend({}, a); let b; let c; let d; let e; let f; let g; let h = []; let i = !a.once && []; var j = function (l) { for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++) if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) { b = !1; break; }d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable()); }; var k = {
        add() { if (h) { const c = h.length; !(function g(b) { n.each(b, (b, c) => { const d = n.type(c); d === 'function' ? a.unique && k.has(c) || h.push(c) : c && c.length && d !== 'string' && g(c); }); }(arguments)), d ? f = h.length : b && (e = c, j(b)); } return this; }, remove() { return h && n.each(arguments, (a, b) => { let c; while ((c = n.inArray(b, h, c)) > -1)h.splice(c, 1), d && (f >= c && f--, g >= c && g--); }), this; }, has(a) { return a ? n.inArray(a, h) > -1 : !(!h || !h.length); }, empty() { return h = [], f = 0, this; }, disable() { return h = i = b = void 0, this; }, disabled() { return !h; }, lock() { return i = void 0, b || k.disable(), this; }, locked() { return !i; }, fireWith(a, b) { return !h || c && !i || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? i.push(b) : j(b)), this; }, fire() { return k.fireWith(this, arguments), this; }, fired() { return !!c; },
      }; return k;
    }, n.extend({
      Deferred(a) {
        const b = [['resolve', 'done', n.Callbacks('once memory'), 'resolved'], ['reject', 'fail', n.Callbacks('once memory'), 'rejected'], ['notify', 'progress', n.Callbacks('memory')]]; let c = 'pending'; var d = {
          state() { return c; }, always() { return e.done(arguments).fail(arguments), this; }, then() { let a = arguments; return n.Deferred((c) => { n.each(b, (b, f) => { const g = n.isFunction(a[b]) && a[b]; e[f[1]](function () { const a = g && g.apply(this, arguments); a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[`${f[0]}With`](this === d ? c.promise() : this, g ? [a] : arguments); }); }), a = null; }).promise(); }, promise(a) { return a != null ? n.extend(a, d) : d; },
        }; var e = {}; return d.pipe = d.then, n.each(b, (a, f) => { const g = f[2]; const h = f[3]; d[f[1]] = g.add, h && g.add(() => { c = h; }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () { return e[`${f[0]}With`](this === e ? d : this, arguments), this; }, e[`${f[0]}With`] = g.fireWith; }), d.promise(e), a && a.call(e, e), e;
      },
      when(a) { let b = 0; const c = d.call(arguments); const e = c.length; let f = e !== 1 || a && n.isFunction(a.promise) ? e : 0; const g = f === 1 ? a : n.Deferred(); const h = function (a, b, c) { return function (e) { b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c); }; }; let i; let j; let k; if (e > 1) for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++)c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f; return f || g.resolveWith(k, c), g.promise(); },
    }); let H; n.fn.ready = function (a) { return n.ready.promise().done(a), this; }, n.extend({
      isReady: !1, readyWait: 1, holdReady(a) { a ? n.readyWait++ : n.ready(!0); }, ready(a) { (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler('ready'), n(l).off('ready')))); },
    }); function I() { l.removeEventListener('DOMContentLoaded', I, !1), a.removeEventListener('load', I, !1), n.ready(); }n.ready.promise = function (b) { return H || (H = n.Deferred(), l.readyState === 'complete' ? setTimeout(n.ready) : (l.addEventListener('DOMContentLoaded', I, !1), a.addEventListener('load', I, !1))), H.promise(b); }, n.ready.promise(); const J = n.access = function (a, b, c, d, e, f, g) { let h = 0; const i = a.length; let j = c == null; if (n.type(c) === 'object') { e = !0; for (h in c)n.access(a, b, h, c[h], !0, f, g); } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) { return j.call(n(a), c); })), b)) for (;i > h; h++)b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c))); return e ? a : j ? b.call(a) : i ? b(a[0], c) : f; }; n.acceptData = function (a) { return a.nodeType === 1 || a.nodeType === 9 || !+a.nodeType; }; function K() { Object.defineProperty(this.cache = {}, 0, { get() { return {}; } }), this.expando = n.expando + K.uid++; }K.uid = 1, K.accepts = n.acceptData, K.prototype = {
      key(a) { if (!K.accepts(a)) return 0; const b = {}; let c = a[this.expando]; if (!c) { c = K.uid++; try { b[this.expando] = { value: c }, Object.defineProperties(a, b); } catch (d) { b[this.expando] = c, n.extend(a, b); } } return this.cache[c] || (this.cache[c] = {}), c; }, set(a, b, c) { let d; const e = this.key(a); const f = this.cache[e]; if (typeof b === 'string')f[b] = c; else if (n.isEmptyObject(f))n.extend(this.cache[e], b); else for (d in b)f[d] = b[d]; return f; }, get(a, b) { const c = this.cache[this.key(a)]; return void 0 === b ? c : c[b]; }, access(a, b, c) { let d; return void 0 === b || b && typeof b === 'string' && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b); }, remove(a, b) { let c; let d; let e; const f = this.key(a); const g = this.cache[f]; if (void 0 === b) this.cache[f] = {}; else { n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length; while (c--) delete g[d[c]]; } }, hasData(a) { return !n.isEmptyObject(this.cache[a[this.expando]] || {}); }, discard(a) { a[this.expando] && delete this.cache[a[this.expando]]; },
    }; const L = new K(); const M = new K();
    const N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/; const
      O = /([A-Z])/g; function P(a, b, c) { let d; if (void 0 === c && a.nodeType === 1) if (d = `data-${b.replace(O, '-$1').toLowerCase()}`, c = a.getAttribute(d), typeof c === 'string') { try { c = c === 'true' ? !0 : c === 'false' ? !1 : c === 'null' ? null : `${+c}` === c ? +c : N.test(c) ? n.parseJSON(c) : c; } catch (e) {}M.set(a, b, c); } else c = void 0; return c; }n.extend({
      hasData(a) { return M.hasData(a) || L.hasData(a); },
      data(a, b, c) {
        return M.access(a, b, c);
      },
      removeData(a, b) { M.remove(a, b); },
      _data(a, b, c) { return L.access(a, b, c); },
      _removeData(a, b) { L.remove(a, b); },
    }), n.fn.extend({ data(a, b) { let c; let d; let e; const f = this[0]; const g = f && f.attributes; if (void 0 === a) { if (this.length && (e = M.get(f), f.nodeType === 1 && !L.get(f, 'hasDataAttrs'))) { c = g.length; while (c--)g[c] && (d = g[c].name, d.indexOf('data-') === 0 && (d = n.camelCase(d.slice(5)), P(f, d, e[d]))); L.set(f, 'hasDataAttrs', !0); } return e; } return typeof a === 'object' ? this.each(function () { M.set(this, a); }) : J(this, function (b) { let c; const d = n.camelCase(a); if (f && void 0 === b) { if (c = M.get(f, a), void 0 !== c) return c; if (c = M.get(f, d), void 0 !== c) return c; if (c = P(f, d, void 0), void 0 !== c) return c; } else this.each(function () { const c = M.get(this, d); M.set(this, d, b), a.indexOf('-') !== -1 && void 0 !== c && M.set(this, a, b); }); }, null, b, arguments.length > 1, null, !0); }, removeData(a) { return this.each(function () { M.remove(this, a); }); } }), n.extend({ queue(a, b, c) { let d; return a ? (b = `${b || 'fx'}queue`, d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0; }, dequeue(a, b) { b = b || 'fx'; const c = n.queue(a, b); let d = c.length; let e = c.shift(); const f = n._queueHooks(a, b); const g = function () { n.dequeue(a, b); }; e === 'inprogress' && (e = c.shift(), d--), e && (b === 'fx' && c.unshift('inprogress'), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire(); }, _queueHooks(a, b) { const c = `${b}queueHooks`; return L.get(a, c) || L.access(a, c, { empty: n.Callbacks('once memory').add(() => { L.remove(a, [`${b}queue`, c]); }) }); } }), n.fn.extend({
      queue(a, b) { let c = 2; return typeof a !== 'string' && (b = a, a = 'fx', c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () { const c = n.queue(this, a, b); n._queueHooks(this, a), a === 'fx' && c[0] !== 'inprogress' && n.dequeue(this, a); }); }, dequeue(a) { return this.each(function () { n.dequeue(this, a); }); }, clearQueue(a) { return this.queue(a || 'fx', []); }, promise(a, b) { let c; let d = 1; const e = n.Deferred(); const f = this; let g = this.length; const h = function () { --d || e.resolveWith(f, [f]); }; typeof a !== 'string' && (b = a, a = void 0), a = a || 'fx'; while (g--)c = L.get(f[g], `${a}queueHooks`), c && c.empty && (d++, c.empty.add(h)); return h(), e.promise(b); },
    }); const Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source; const R = ['Top', 'Right', 'Bottom', 'Left']; const S = function (a, b) { return a = b || a, n.css(a, 'display') === 'none' || !n.contains(a.ownerDocument, a); }; const T = /^(?:checkbox|radio)$/i; !(function () { const a = l.createDocumentFragment(); const b = a.appendChild(l.createElement('div')); const c = l.createElement('input'); c.setAttribute('type', 'radio'), c.setAttribute('checked', 'checked'), c.setAttribute('name', 't'), b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = '<textarea>x</textarea>', k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue; }()); const U = 'undefined'; k.focusinBubbles = 'onfocusin' in a; const V = /^key/; const W = /^(?:mouse|pointer|contextmenu)|click/; const X = /^(?:focusinfocus|focusoutblur)$/; const Y = /^([^.]*)(?:\.(.+)|)$/; function Z() { return !0; } function $() { return !1; } function _() { try { return l.activeElement; } catch (a) {} }n.event = {
      global: {},
      add(a, b, c, d, e) {
        let f; let g; let h; let i; let j; let k; let l; let m; let o; let p; let q; const r = L.get(a); if (r) {
          c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) { return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0; }), b = (b || '').match(E) || [''], j = b.length; while (j--) {
            h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || '').split('.').sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
              type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && n.expr.match.needsContext.test(e), namespace: p.join('.'),
            }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0);
          }
        }
      },
      remove(a, b, c, d, e) { let f; let g; let h; let i; let j; let k; let l; let m; let o; let p; let q; const r = L.hasData(a) && L.get(a); if (r && (i = r.events)) { b = (b || '').match(E) || [''], j = b.length; while (j--) if (h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || '').split('.').sort(), o) { l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp(`(^|\\.)${p.join('\\.(?:.*\\.|)')}(\\.|$)`), g = f = m.length; while (f--)k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && (d !== '**' || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k)); g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o]); } else for (o in i)n.event.remove(a, o + b[j], c, d, !0); n.isEmptyObject(i) && (delete r.handle, L.remove(a, 'events')); } },
      trigger(b, c, d, e) { let f; let g; let h; let i; let k; let m; let o; const p = [d || l]; let q = j.call(b, 'type') ? b.type : b; let r = j.call(b, 'namespace') ? b.namespace.split('.') : []; if (g = h = d = d || l, d.nodeType !== 3 && d.nodeType !== 8 && !X.test(q + n.event.triggered) && (q.indexOf('.') >= 0 && (r = q.split('.'), q = r.shift(), r.sort()), k = q.indexOf(':') < 0 && `on${q}`, b = b[n.expando] ? b : new n.Event(q, typeof b === 'object' && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join('.'), b.namespace_re = b.namespace ? new RegExp(`(^|\\.)${r.join('\\.(?:.*\\.|)')}(\\.|$)`) : null, b.result = void 0, b.target || (b.target = d), c = c == null ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1)) { if (!e && !o.noBubble && !n.isWindow(d)) { for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode)p.push(g), h = g; h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a); }f = 0; while ((g = p[f++]) && !b.isPropagationStopped())b.type = f > 1 ? i : o.bindType || q, m = (L.get(g, 'events') || {})[b.type] && L.get(g, 'handle'), m && m.apply(g, c), m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault()); return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result; } },
      dispatch(a) { a = n.event.fix(a); let b; let c; let e; let f; let g; let h = []; const i = d.call(arguments); const j = (L.get(this, 'events') || {})[a.type] || []; const k = n.event.special[a.type] || {}; if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) { h = n.event.handlers.call(this, a, j), b = 0; while ((f = h[b++]) && !a.isPropagationStopped()) { a.currentTarget = f.elem, c = 0; while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation())); } return k.postDispatch && k.postDispatch.call(this, a), a.result; } },
      handlers(a, b) { let c; let d; let e; let f; const g = []; const h = b.delegateCount; let i = a.target; if (h && i.nodeType && (!a.button || a.type !== 'click')) for (;i !== this; i = i.parentNode || this) if (i.disabled !== !0 || a.type !== 'click') { for (d = [], c = 0; h > c; c++)f = b[c], e = `${f.selector} `, void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f); d.length && g.push({ elem: i, handlers: d }); } return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g; },
      props: 'altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(' '),
      fixHooks: {},
      keyHooks: { props: 'char charCode key keyCode'.split(' '), filter(a, b) { return a.which == null && (a.which = b.charCode != null ? b.charCode : b.keyCode), a; } },
      mouseHooks: { props: 'button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement'.split(' '), filter(a, b) { let c; let d; let e; const f = b.button; return a.pageX == null && b.clientX != null && (c = a.target.ownerDocument || l, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a; } },
      fix(a) { if (a[n.expando]) return a; let b; let c; let d; const e = a.type; const f = a; let g = this.fixHooks[e]; g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length; while (b--)c = d[b], a[c] = f[c]; return a.target || (a.target = l), a.target.nodeType === 3 && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a; },
      special: {
        load: { noBubble: !0 }, focus: { trigger() { return this !== _() && this.focus ? (this.focus(), !1) : void 0; }, delegateType: 'focusin' }, blur: { trigger() { return this === _() && this.blur ? (this.blur(), !1) : void 0; }, delegateType: 'focusout' }, click: { trigger() { return this.type === 'checkbox' && this.click && n.nodeName(this, 'input') ? (this.click(), !1) : void 0; }, _default(a) { return n.nodeName(a.target, 'a'); } }, beforeunload: { postDispatch(a) { void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result); } },
      },
      simulate(a, b, c, d) { const e = n.extend(new n.Event(), c, { type: a, isSimulated: !0, originalEvent: {} }); d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault(); },
    }, n.removeEvent = function (a, b, c) { a.removeEventListener && a.removeEventListener(b, c, !1); }, n.Event = function (a, b) { return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b); }, n.Event.prototype = {
      isDefaultPrevented: $, isPropagationStopped: $, isImmediatePropagationStopped: $, preventDefault() { const a = this.originalEvent; this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault(); }, stopPropagation() { const a = this.originalEvent; this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation(); }, stopImmediatePropagation() { const a = this.originalEvent; this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation(); },
    }, n.each({
      mouseenter: 'mouseover', mouseleave: 'mouseout', pointerenter: 'pointerover', pointerleave: 'pointerout',
    }, (a, b) => { n.event.special[a] = { delegateType: b, bindType: b, handle(a) { let c; const d = this; const e = a.relatedTarget; const f = a.handleObj; return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c; } }; }), k.focusinBubbles || n.each({ focus: 'focusin', blur: 'focusout' }, (a, b) => { const c = function (a) { n.event.simulate(b, a.target, n.event.fix(a), !0); }; n.event.special[b] = { setup() { const d = this.ownerDocument || this; const e = L.access(d, b); e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1); }, teardown() { const d = this.ownerDocument || this; const e = L.access(d, b) - 1; e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b)); } }; }), n.fn.extend({
      on(a, b, c, d, e) { let f; let g; if (typeof a === 'object') { typeof b !== 'string' && (c = c || b, b = void 0); for (g in a) this.on(g, b, c, a[g], e); return this; } if (c == null && d == null ? (d = b, c = b = void 0) : d == null && (typeof b === 'string' ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1)d = $; else if (!d) return this; return e === 1 && (f = d, d = function (a) { return n().off(a), f.apply(this, arguments); }, d.guid = f.guid || (f.guid = n.guid++)), this.each(function () { n.event.add(this, a, d, c, b); }); }, one(a, b, c, d) { return this.on(a, b, c, d, 1); }, off(a, b, c) { let d; let e; if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? `${d.origType}.${d.namespace}` : d.origType, d.selector, d.handler), this; if (typeof a === 'object') { for (e in a) this.off(e, b, a[e]); return this; } return (b === !1 || typeof b === 'function') && (c = b, b = void 0), c === !1 && (c = $), this.each(function () { n.event.remove(this, a, c, b); }); }, trigger(a, b) { return this.each(function () { n.event.trigger(a, b, this); }); }, triggerHandler(a, b) { const c = this[0]; return c ? n.event.trigger(a, b, c, !0) : void 0; },
    }); const aa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi; const ba = /<([\w:]+)/; const ca = /<|&#?\w+;/; const da = /<(?:script|style|link)/i; const ea = /checked\s*(?:[^=]|=\s*.checked.)/i; const fa = /^$|\/(?:java|ecma)script/i; const ga = /^true\/(.*)/; const ha = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g; const ia = {
      option: [1, "<select multiple='multiple'>", '</select>'], thead: [1, '<table>', '</table>'], col: [2, '<table><colgroup>', '</colgroup></table>'], tr: [2, '<table><tbody>', '</tbody></table>'], td: [3, '<table><tbody><tr>', '</tr></tbody></table>'], _default: [0, '', ''],
    }; ia.optgroup = ia.option, ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead, ia.th = ia.td; function ja(a, b) { return n.nodeName(a, 'table') && n.nodeName(b.nodeType !== 11 ? b : b.firstChild, 'tr') ? a.getElementsByTagName('tbody')[0] || a.appendChild(a.ownerDocument.createElement('tbody')) : a; } function ka(a) { return a.type = `${a.getAttribute('type') !== null}/${a.type}`, a; } function la(a) { const b = ga.exec(a.type); return b ? a.type = b[1] : a.removeAttribute('type'), a; } function ma(a, b) { for (let c = 0, d = a.length; d > c; c++)L.set(a[c], 'globalEval', !b || L.get(b[c], 'globalEval')); } function na(a, b) { let c; let d; let e; let f; let g; let h; let i; let j; if (b.nodeType === 1) { if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) { delete g.handle, g.events = {}; for (e in j) for (c = 0, d = j[e].length; d > c; c++)n.event.add(b, e, j[e][c]); }M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i)); } } function oa(a, b) { const c = a.getElementsByTagName ? a.getElementsByTagName(b || '*') : a.querySelectorAll ? a.querySelectorAll(b || '*') : []; return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c; } function pa(a, b) { const c = b.nodeName.toLowerCase(); c === 'input' && T.test(a.type) ? b.checked = a.checked : (c === 'input' || c === 'textarea') && (b.defaultValue = a.defaultValue); }n.extend({ clone(a, b, c) { let d; let e; let f; let g; const h = a.cloneNode(!0); const i = n.contains(a.ownerDocument, a); if (!(k.noCloneChecked || a.nodeType !== 1 && a.nodeType !== 11 || n.isXMLDoc(a))) for (g = oa(h), f = oa(a), d = 0, e = f.length; e > d; d++)pa(f[d], g[d]); if (b) if (c) for (f = f || oa(a), g = g || oa(h), d = 0, e = f.length; e > d; d++)na(f[d], g[d]); else na(a, h); return g = oa(h, 'script'), g.length > 0 && ma(g, !i && oa(a, 'script')), h; }, buildFragment(a, b, c, d) { for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++) if (e = a[m], e || e === 0) if (n.type(e) === 'object')n.merge(l, e.nodeType ? [e] : e); else if (ca.test(e)) { f = f || k.appendChild(b.createElement('div')), g = (ba.exec(e) || ['', ''])[1].toLowerCase(), h = ia[g] || ia._default, f.innerHTML = h[1] + e.replace(aa, '<$1></$2>') + h[2], j = h[0]; while (j--)f = f.lastChild; n.merge(l, f.childNodes), f = k.firstChild, f.textContent = ''; } else l.push(b.createTextNode(e)); k.textContent = '', m = 0; while (e = l[m++]) if ((!d || n.inArray(e, d) === -1) && (i = n.contains(e.ownerDocument, e), f = oa(k.appendChild(e), 'script'), i && ma(f), c)) { j = 0; while (e = f[j++])fa.test(e.type || '') && c.push(e); } return k; }, cleanData(a) { for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) { if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) { if (b.events) for (d in b.events)f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle); L.cache[e] && delete L.cache[e]; } delete M.cache[c[M.expando]]; } } }), n.fn.extend({
      text(a) { return J(this, function (a) { return void 0 === a ? n.text(this) : this.empty().each(function () { (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && (this.textContent = a); }); }, null, a, arguments.length); }, append() { return this.domManip(arguments, function (a) { if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) { const b = ja(this, a); b.appendChild(a); } }); }, prepend() { return this.domManip(arguments, function (a) { if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) { const b = ja(this, a); b.insertBefore(a, b.firstChild); } }); }, before() { return this.domManip(arguments, function (a) { this.parentNode && this.parentNode.insertBefore(a, this); }); }, after() { return this.domManip(arguments, function (a) { this.parentNode && this.parentNode.insertBefore(a, this.nextSibling); }); }, remove(a, b) { for (var c, d = a ? n.filter(a, this) : this, e = 0; (c = d[e]) != null; e++)b || c.nodeType !== 1 || n.cleanData(oa(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && ma(oa(c, 'script')), c.parentNode.removeChild(c)); return this; }, empty() { for (var a, b = 0; (a = this[b]) != null; b++)a.nodeType === 1 && (n.cleanData(oa(a, !1)), a.textContent = ''); return this; }, clone(a, b) { return a = a == null ? !1 : a, b = b == null ? a : b, this.map(function () { return n.clone(this, a, b); }); }, html(a) { return J(this, function (a) { let b = this[0] || {}; let c = 0; const d = this.length; if (void 0 === a && b.nodeType === 1) return b.innerHTML; if (typeof a === 'string' && !da.test(a) && !ia[(ba.exec(a) || ['', ''])[1].toLowerCase()]) { a = a.replace(aa, '<$1></$2>'); try { for (;d > c; c++)b = this[c] || {}, b.nodeType === 1 && (n.cleanData(oa(b, !1)), b.innerHTML = a); b = 0; } catch (e) {} }b && this.empty().append(a); }, null, a, arguments.length); }, replaceWith() { let a = arguments[0]; return this.domManip(arguments, function (b) { a = this.parentNode, n.cleanData(oa(this)), a && a.replaceChild(b, this); }), a && (a.length || a.nodeType) ? this : this.remove(); }, detach(a) { return this.remove(a, !0); }, domManip(a, b) { a = e.apply([], a); let c; let d; let f; let g; let h; let i; let j = 0; const l = this.length; const m = this; const o = l - 1; const p = a[0]; const q = n.isFunction(p); if (q || l > 1 && typeof p === 'string' && !k.checkClone && ea.test(p)) return this.each(function (c) { const d = m.eq(c); q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b); }); if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, c.childNodes.length === 1 && (c = d), d)) { for (f = n.map(oa(c, 'script'), ka), g = f.length; l > j; j++)h = c, j !== o && (h = n.clone(h, !0, !0), g && n.merge(f, oa(h, 'script'))), b.call(this[j], h, j); if (g) for (i = f[f.length - 1].ownerDocument, n.map(f, la), j = 0; g > j; j++)h = f[j], fa.test(h.type || '') && !L.access(h, 'globalEval') && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(ha, ''))); } return this; },
    }), n.each({
      appendTo: 'append', prependTo: 'prepend', insertBefore: 'before', insertAfter: 'after', replaceAll: 'replaceWith',
    }, (a, b) => { n.fn[a] = function (a) { for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++)c = h === g ? this : this.clone(!0), n(e[h])[b](c), f.apply(d, c.get()); return this.pushStack(d); }; }); let qa; const ra = {}; function sa(b, c) { let d; const e = n(c.createElement(b)).appendTo(c.body); const f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], 'display'); return e.detach(), f; } function ta(a) { let b = l; let c = ra[a]; return c || (c = sa(a, b), c !== 'none' && c || (qa = (qa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qa[0].contentDocument, b.write(), b.close(), c = sa(a, b), qa.detach()), ra[a] = c), c; } const ua = /^margin/; const va = new RegExp(`^(${Q})(?!px)[a-z%]+$`, 'i'); const wa = function (b) { return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null); }; function xa(a, b, c) { let d; let e; let f; let g; const h = a.style; return c = c || wa(a), c && (g = c.getPropertyValue(b) || c[b]), c && (g !== '' || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), va.test(g) && ua.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? `${g}` : g; } function ya(a, b) { return { get() { return a() ? void delete this.get : (this.get = b).apply(this, arguments); } }; }!(function () { let b; let c; const d = l.documentElement; const e = l.createElement('div'); const f = l.createElement('div'); if (f.style) { f.style.backgroundClip = 'content-box', f.cloneNode(!0).style.backgroundClip = '', k.clearCloneStyle = f.style.backgroundClip === 'content-box', e.style.cssText = 'border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute', e.appendChild(f); function g() { f.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute', f.innerHTML = '', d.appendChild(e); const g = a.getComputedStyle(f, null); b = g.top !== '1%', c = g.width === '4px', d.removeChild(e); }a.getComputedStyle && n.extend(k, { pixelPosition() { return g(), b; }, boxSizingReliable() { return c == null && g(), c; }, reliableMarginRight() { let b; const c = f.appendChild(l.createElement('div')); return c.style.cssText = f.style.cssText = '-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0', c.style.marginRight = c.style.width = '0', f.style.width = '1px', d.appendChild(e), b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), f.removeChild(c), b; } }); } }()), n.swap = function (a, b, c, d) { let e; let f; const g = {}; for (f in b)g[f] = a.style[f], a.style[f] = b[f]; e = c.apply(a, d || []); for (f in b)a.style[f] = g[f]; return e; }; const za = /^(none|table(?!-c[ea]).+)/; const Aa = new RegExp(`^(${Q})(.*)$`, 'i'); const Ba = new RegExp(`^([+-])=(${Q})`, 'i'); const Ca = { position: 'absolute', visibility: 'hidden', display: 'block' }; const Da = { letterSpacing: '0', fontWeight: '400' }; const Ea = ['Webkit', 'O', 'Moz', 'ms']; function Fa(a, b) { if (b in a) return b; const c = b[0].toUpperCase() + b.slice(1); const d = b; let e = Ea.length; while (e--) if (b = Ea[e] + c, b in a) return b; return d; } function Ga(a, b, c) { const d = Aa.exec(b); return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || 'px') : b; } function Ha(a, b, c, d, e) { for (var f = c === (d ? 'border' : 'content') ? 4 : b === 'width' ? 1 : 0, g = 0; f < 4; f += 2)c === 'margin' && (g += n.css(a, c + R[f], !0, e)), d ? (c === 'content' && (g -= n.css(a, `padding${R[f]}`, !0, e)), c !== 'margin' && (g -= n.css(a, `border${R[f]}Width`, !0, e))) : (g += n.css(a, `padding${R[f]}`, !0, e), c !== 'padding' && (g += n.css(a, `border${R[f]}Width`, !0, e))); return g; } function Ia(a, b, c) { let d = !0; let e = b === 'width' ? a.offsetWidth : a.offsetHeight; const f = wa(a); const g = n.css(a, 'boxSizing', !1, f) === 'border-box'; if (e <= 0 || e == null) { if (e = xa(a, b, f), (e < 0 || e == null) && (e = a.style[b]), va.test(e)) return e; d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0; } return `${e + Ha(a, b, c || (g ? 'border' : 'content'), d, f)}px`; } function Ja(a, b) { for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)d = a[g], d.style && (f[g] = L.get(d, 'olddisplay'), c = d.style.display, b ? (f[g] || c !== 'none' || (d.style.display = ''), d.style.display === '' && S(d) && (f[g] = L.access(d, 'olddisplay', ta(d.nodeName)))) : (e = S(d), c === 'none' && e || L.set(d, 'olddisplay', e ? c : n.css(d, 'display')))); for (g = 0; h > g; g++)d = a[g], d.style && (b && d.style.display !== 'none' && d.style.display !== '' || (d.style.display = b ? f[g] || '' : 'none')); return a; }n.extend({
      cssHooks: { opacity: { get(a, b) { if (b) { const c = xa(a, 'opacity'); return c === '' ? '1' : c; } } } },
      cssNumber: {
        columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0,
      },
      cssProps: { float: 'cssFloat' },
      style(a, b, c, d) { if (a && a.nodeType !== 3 && a.nodeType !== 8 && a.style) { let e; let f; let g; const h = n.camelCase(b); const i = a.style; return b = n.cssProps[h] || (n.cssProps[h] = Fa(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && 'get' in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, f === 'string' && (e = Ba.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = 'number'), c != null && c === c && (f !== 'number' || n.cssNumber[h] || (c += 'px'), k.clearCloneStyle || c !== '' || b.indexOf('background') !== 0 || (i[b] = 'inherit'), g && 'set' in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0); } },
      css(a, b, c, d) { let e; let f; let g; const h = n.camelCase(b); return b = n.cssProps[h] || (n.cssProps[h] = Fa(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && 'get' in g && (e = g.get(a, !0, c)), void 0 === e && (e = xa(a, b, d)), e === 'normal' && b in Da && (e = Da[b]), c === '' || c ? (f = parseFloat(e), c === !0 || n.isNumeric(f) ? f || 0 : e) : e; },
    }), n.each(['height', 'width'], (a, b) => { n.cssHooks[b] = { get(a, c, d) { return c ? za.test(n.css(a, 'display')) && a.offsetWidth === 0 ? n.swap(a, Ca, () => Ia(a, b, d)) : Ia(a, b, d) : void 0; }, set(a, c, d) { const e = d && wa(a); return Ga(a, c, d ? Ha(a, b, d, n.css(a, 'boxSizing', !1, e) === 'border-box', e) : 0); } }; }), n.cssHooks.marginRight = ya(k.reliableMarginRight, (a, b) => (b ? n.swap(a, { display: 'inline-block' }, xa, [a, 'marginRight']) : void 0)), n.each({ margin: '', padding: '', border: 'Width' }, (a, b) => { n.cssHooks[a + b] = { expand(c) { for (var d = 0, e = {}, f = typeof c === 'string' ? c.split(' ') : [c]; d < 4; d++)e[a + R[d] + b] = f[d] || f[d - 2] || f[0]; return e; } }, ua.test(a) || (n.cssHooks[a + b].set = Ga); }), n.fn.extend({
      css(a, b) { return J(this, (a, b, c) => { let d; let e; const f = {}; let g = 0; if (n.isArray(b)) { for (d = wa(a), e = b.length; e > g; g++)f[b[g]] = n.css(a, b[g], !1, d); return f; } return void 0 !== c ? n.style(a, b, c) : n.css(a, b); }, a, b, arguments.length > 1); }, show() { return Ja(this, !0); }, hide() { return Ja(this); }, toggle(a) { return typeof a === 'boolean' ? a ? this.show() : this.hide() : this.each(function () { S(this) ? n(this).show() : n(this).hide(); }); },
    }); function Ka(a, b, c, d, e) { return new Ka.prototype.init(a, b, c, d, e); }n.Tween = Ka, Ka.prototype = {
      constructor: Ka, init(a, b, c, d, e, f) { this.elem = a, this.prop = c, this.easing = e || 'swing', this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? '' : 'px'); }, cur() { const a = Ka.propHooks[this.prop]; return a && a.get ? a.get(this) : Ka.propHooks._default.get(this); }, run(a) { let b; const c = Ka.propHooks[this.prop]; return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ka.propHooks._default.set(this), this; },
    }, Ka.prototype.init.prototype = Ka.prototype, Ka.propHooks = { _default: { get(a) { let b; return a.elem[a.prop] == null || a.elem.style && a.elem.style[a.prop] != null ? (b = n.css(a.elem, a.prop, ''), b && b !== 'auto' ? b : 0) : a.elem[a.prop]; }, set(a) { n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (a.elem.style[n.cssProps[a.prop]] != null || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now; } } }, Ka.propHooks.scrollTop = Ka.propHooks.scrollLeft = { set(a) { a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now); } }, n.easing = { linear(a) { return a; }, swing(a) { return 0.5 - Math.cos(a * Math.PI) / 2; } }, n.fx = Ka.prototype.init, n.fx.step = {}; let La; let Ma; const Na = /^(?:toggle|show|hide)$/; const Oa = new RegExp(`^(?:([+-])=|)(${Q})([a-z%]*)$`, 'i'); const Pa = /queueHooks$/; const Qa = [Va]; const Ra = { '*': [function (a, b) { const c = this.createTween(a, b); const d = c.cur(); let e = Oa.exec(b); let f = e && e[3] || (n.cssNumber[a] ? '' : 'px'); let g = (n.cssNumber[a] || f !== 'px' && +d) && Oa.exec(n.css(c.elem, a)); let h = 1; let i = 20; if (g && g[3] !== f) { f = f || g[3], e = e || [], g = +d || 1; do h = h || '.5', g /= h, n.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && h !== 1 && --i); } return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c; }] }; function Sa() { return setTimeout(() => { La = void 0; }), La = n.now(); } function Ta(a, b) { let c; let d = 0; const e = { height: a }; for (b = b ? 1 : 0; d < 4; d += 2 - b)c = R[d], e[`margin${c}`] = e[`padding${c}`] = a; return b && (e.opacity = e.width = a), e; } function Ua(a, b, c) { for (var d, e = (Ra[b] || []).concat(Ra['*']), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d; } function Va(a, b, c) { let d; let e; let f; let g; let h; let i; let j; let k; const l = this; const m = {}; const o = a.style; let p = a.nodeType && S(a); let q = L.get(a, 'fxshow'); c.queue || (h = n._queueHooks(a, 'fx'), h.unqueued == null && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () { h.unqueued || i(); }), h.unqueued++, l.always(() => { l.always(() => { h.unqueued--, n.queue(a, 'fx').length || h.empty.fire(); }); })), a.nodeType === 1 && ('height' in b || 'width' in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, 'display'), k = j === 'none' ? L.get(a, 'olddisplay') || ta(a.nodeName) : j, k === 'inline' && n.css(a, 'float') === 'none' && (o.display = 'inline-block')), c.overflow && (o.overflow = 'hidden', l.always(() => { o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]; })); for (d in b) if (e = b[d], Na.exec(e)) { if (delete b[d], f = f || e === 'toggle', e === (p ? 'hide' : 'show')) { if (e !== 'show' || !q || void 0 === q[d]) continue; p = !0; }m[d] = q && q[d] || n.style(a, d); } else j = void 0; if (n.isEmptyObject(m))(j === 'none' ? ta(a.nodeName) : j) === 'inline' && (o.display = j); else { q ? 'hidden' in q && (p = q.hidden) : q = L.access(a, 'fxshow', {}), f && (q.hidden = !p), p ? n(a).show() : l.done(() => { n(a).hide(); }), l.done(() => { let b; L.remove(a, 'fxshow'); for (b in m)n.style(a, b, m[b]); }); for (d in m)g = Ua(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = d === 'width' || d === 'height' ? 1 : 0)); } } function Wa(a, b) { let c; let d; let e; let f; let g; for (c in a) if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && 'expand' in g) { f = g.expand(f), delete a[d]; for (c in f)c in a || (a[c] = f[c], b[c] = e); } else b[d] = e; } function Xa(a, b, c) {
      let d; let e; let f = 0; const g = Qa.length; const h = n.Deferred().always(() => { delete i.elem; }); var i = function () { if (e) return !1; for (var b = La || Sa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)j.tweens[g].run(f); return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (h.resolveWith(a, [j]), !1); }; var j = h.promise({
        elem: a, props: n.extend({}, b), opts: n.extend(!0, { specialEasing: {} }, c), originalProperties: b, originalOptions: c, startTime: La || Sa(), duration: c.duration, tweens: [], createTween(b, c) { const d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing); return j.tweens.push(d), d; }, stop(b) { let c = 0; const d = b ? j.tweens.length : 0; if (e) return this; for (e = !0; d > c; c++)j.tweens[c].run(1); return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this; },
      }); const k = j.props; for (Wa(k, j.opts.specialEasing); g > f; f++) if (d = Qa[f].call(j, a, k, j.opts)) return d; return n.map(k, Ua, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
    }n.Animation = n.extend(Xa, { tweener(a, b) { n.isFunction(a) ? (b = a, a = ['*']) : a = a.split(' '); for (var c, d = 0, e = a.length; e > d; d++)c = a[d], Ra[c] = Ra[c] || [], Ra[c].unshift(b); }, prefilter(a, b) { b ? Qa.unshift(a) : Qa.push(a); } }), n.speed = function (a, b, c) { const d = a && typeof a === 'object' ? n.extend({}, a) : { complete: c || !c && b || n.isFunction(a) && a, duration: a, easing: c && b || b && !n.isFunction(b) && b }; return d.duration = n.fx.off ? 0 : typeof d.duration === 'number' ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (d.queue == null || d.queue === !0) && (d.queue = 'fx'), d.old = d.complete, d.complete = function () { n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue); }, d; }, n.fn.extend({
      fadeTo(a, b, c, d) {
        return this.filter(S).css('opacity', 0).show().end()
          .animate({ opacity: b }, a, c, d);
      },
      animate(a, b, c, d) { const e = n.isEmptyObject(a); const f = n.speed(b, c, d); const g = function () { const b = Xa(this, n.extend({}, a), f); (e || L.get(this, 'finish')) && b.stop(!0); }; return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g); },
      stop(a, b, c) { const d = function (a) { const b = a.stop; delete a.stop, b(c); }; return typeof a !== 'string' && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || 'fx', []), this.each(function () { let b = !0; let e = a != null && `${a}queueHooks`; const f = n.timers; const g = L.get(this); if (e)g[e] && g[e].stop && d(g[e]); else for (e in g)g[e] && g[e].stop && Pa.test(e) && d(g[e]); for (e = f.length; e--;)f[e].elem !== this || a != null && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1)); (b || !c) && n.dequeue(this, a); }); },
      finish(a) { return a !== !1 && (a = a || 'fx'), this.each(function () { let b; const c = L.get(this); const d = c[`${a}queue`]; const e = c[`${a}queueHooks`]; const f = n.timers; const g = d ? d.length : 0; for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;)f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1)); for (b = 0; g > b; b++)d[b] && d[b].finish && d[b].finish.call(this); delete c.finish; }); },
    }), n.each(['toggle', 'show', 'hide'], (a, b) => { const c = n.fn[b]; n.fn[b] = function (a, d, e) { return a == null || typeof a === 'boolean' ? c.apply(this, arguments) : this.animate(Ta(b, !0), a, d, e); }; }), n.each({
      slideDown: Ta('show'), slideUp: Ta('hide'), slideToggle: Ta('toggle'), fadeIn: { opacity: 'show' }, fadeOut: { opacity: 'hide' }, fadeToggle: { opacity: 'toggle' },
    }, (a, b) => { n.fn[a] = function (a, c, d) { return this.animate(b, a, c, d); }; }), n.timers = [], n.fx.tick = function () { let a; let b = 0; const c = n.timers; for (La = n.now(); b < c.length; b++)a = c[b], a() || c[b] !== a || c.splice(b--, 1); c.length || n.fx.stop(), La = void 0; }, n.fx.timer = function (a) { n.timers.push(a), a() ? n.fx.start() : n.timers.pop(); }, n.fx.interval = 13, n.fx.start = function () { Ma || (Ma = setInterval(n.fx.tick, n.fx.interval)); }, n.fx.stop = function () { clearInterval(Ma), Ma = null; }, n.fx.speeds = { slow: 600, fast: 200, _default: 400 }, n.fn.delay = function (a, b) { return a = n.fx ? n.fx.speeds[a] || a : a, b = b || 'fx', this.queue(b, (b, c) => { const d = setTimeout(b, a); c.stop = function () { clearTimeout(d); }; }); }, (function () { let a = l.createElement('input'); const b = l.createElement('select'); const c = b.appendChild(l.createElement('option')); a.type = 'checkbox', k.checkOn = a.value !== '', k.optSelected = c.selected, b.disabled = !0, k.optDisabled = !c.disabled, a = l.createElement('input'), a.value = 't', a.type = 'radio', k.radioValue = a.value === 't'; }()); let Ya; let Za; const $a = n.expr.attrHandle; n.fn.extend({ attr(a, b) { return J(this, n.attr, a, b, arguments.length > 1); }, removeAttr(a) { return this.each(function () { n.removeAttr(this, a); }); } }), n.extend({
      attr(a, b, c) {
        let d; let e; const f = a.nodeType; if (a && f !== 3 && f !== 8 && f !== 2) {
          return typeof a.getAttribute === U ? n.prop(a, b, c) : (f === 1 && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Za : Ya)),
          void 0 === c ? d && 'get' in d && (e = d.get(a, b)) !== null ? e : (e = n.find.attr(a, b), e == null ? void 0 : e) : c !== null ? d && 'set' in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, `${c}`), c) : void n.removeAttr(a, b));
        }
      },
      removeAttr(a, b) { let c; let d; let e = 0; const f = b && b.match(E); if (f && a.nodeType === 1) while (c = f[e++])d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c); },
      attrHooks: { type: { set(a, b) { if (!k.radioValue && b === 'radio' && n.nodeName(a, 'input')) { const c = a.value; return a.setAttribute('type', b), c && (a.value = c), b; } } } },
    }), Za = { set(a, b, c) { return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c; } }, n.each(n.expr.match.bool.source.match(/\w+/g), (a, b) => { const c = $a[b] || n.find.attr; $a[b] = function (a, b, d) { let e; let f; return d || (f = $a[b], $a[b] = e, e = c(a, b, d) != null ? b.toLowerCase() : null, $a[b] = f), e; }; }); const _a = /^(?:input|select|textarea|button)$/i; n.fn.extend({ prop(a, b) { return J(this, n.prop, a, b, arguments.length > 1); }, removeProp(a) { return this.each(function () { delete this[n.propFix[a] || a]; }); } }), n.extend({ propFix: { for: 'htmlFor', class: 'className' }, prop(a, b, c) { let d; let e; let f; const g = a.nodeType; if (a && g !== 3 && g !== 8 && g !== 2) return f = g !== 1 || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && 'set' in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && 'get' in e && (d = e.get(a, b)) !== null ? d : a[b]; }, propHooks: { tabIndex: { get(a) { return a.hasAttribute('tabindex') || _a.test(a.nodeName) || a.href ? a.tabIndex : -1; } } } }), k.optSelected || (n.propHooks.selected = { get(a) { const b = a.parentNode; return b && b.parentNode && b.parentNode.selectedIndex, null; } }), n.each(['tabIndex', 'readOnly', 'maxLength', 'cellSpacing', 'cellPadding', 'rowSpan', 'colSpan', 'useMap', 'frameBorder', 'contentEditable'], function () { n.propFix[this.toLowerCase()] = this; }); const ab = /[\t\r\n\f]/g; n.fn.extend({
      addClass(a) { let b; let c; let d; let e; let f; let g; const h = typeof a === 'string' && a; let i = 0; const j = this.length; if (n.isFunction(a)) return this.each(function (b) { n(this).addClass(a.call(this, b, this.className)); }); if (h) for (b = (a || '').match(E) || []; j > i; i++) if (c = this[i], d = c.nodeType === 1 && (c.className ? (` ${c.className} `).replace(ab, ' ') : ' ')) { f = 0; while (e = b[f++])d.indexOf(` ${e} `) < 0 && (d += `${e} `); g = n.trim(d), c.className !== g && (c.className = g); } return this; }, removeClass(a) { let b; let c; let d; let e; let f; let g; const h = arguments.length === 0 || typeof a === 'string' && a; let i = 0; const j = this.length; if (n.isFunction(a)) return this.each(function (b) { n(this).removeClass(a.call(this, b, this.className)); }); if (h) for (b = (a || '').match(E) || []; j > i; i++) if (c = this[i], d = c.nodeType === 1 && (c.className ? (` ${c.className} `).replace(ab, ' ') : '')) { f = 0; while (e = b[f++]) while (d.indexOf(` ${e} `) >= 0)d = d.replace(` ${e} `, ' '); g = a ? n.trim(d) : '', c.className !== g && (c.className = g); } return this; }, toggleClass(a, b) { const c = typeof a; return typeof b === 'boolean' && c === 'string' ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function (c) { n(this).toggleClass(a.call(this, c, this.className, b), b); } : function () { if (c === 'string') { let b; let d = 0; const e = n(this); const f = a.match(E) || []; while (b = f[d++])e.hasClass(b) ? e.removeClass(b) : e.addClass(b); } else (c === U || c === 'boolean') && (this.className && L.set(this, '__className__', this.className), this.className = this.className || a === !1 ? '' : L.get(this, '__className__') || ''); }); }, hasClass(a) { for (let b = ` ${a} `, c = 0, d = this.length; d > c; c++) if (this[c].nodeType === 1 && (` ${this[c].className} `).replace(ab, ' ').indexOf(b) >= 0) return !0; return !1; },
    }); const bb = /\r/g; n.fn.extend({ val(a) { let b; let c; let d; const e = this[0]; { if (arguments.length) return d = n.isFunction(a), this.each(function (c) { let e; this.nodeType === 1 && (e = d ? a.call(this, c, n(this).val()) : a, e == null ? e = '' : typeof e === 'number' ? e += '' : n.isArray(e) && (e = n.map(e, a => (a == null ? '' : `${a}`))), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && 'set' in b && void 0 !== b.set(this, e, 'value') || (this.value = e)); }); if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && 'get' in b && void 0 !== (c = b.get(e, 'value')) ? c : (c = e.value, typeof c === 'string' ? c.replace(bb, '') : c == null ? '' : c); } } }), n.extend({ valHooks: { option: { get(a) { const b = n.find.attr(a, 'value'); return b != null ? b : n.trim(n.text(a)); } }, select: { get(a) { for (var b, c, d = a.options, e = a.selectedIndex, f = a.type === 'select-one' || e < 0, g = f ? null : [], h = f ? e + 1 : d.length, i = e < 0 ? h : f ? e : 0; h > i; i++) if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : c.getAttribute('disabled') !== null) || c.parentNode.disabled && n.nodeName(c.parentNode, 'optgroup'))) { if (b = n(c).val(), f) return b; g.push(b); } return g; }, set(a, b) { let c; let d; const e = a.options; const f = n.makeArray(b); let g = e.length; while (g--)d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c = !0); return c || (a.selectedIndex = -1), f; } } } }), n.each(['radio', 'checkbox'], function () { n.valHooks[this] = { set(a, b) { return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0; } }, k.checkOn || (n.valHooks[this].get = function (a) { return a.getAttribute('value') === null ? 'on' : a.value; }); }), n.each('blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(' '), (a, b) => { n.fn[b] = function (a, c) { return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b); }; }), n.fn.extend({
      hover(a, b) { return this.mouseenter(a).mouseleave(b || a); }, bind(a, b, c) { return this.on(a, null, b, c); }, unbind(a, b) { return this.off(a, null, b); }, delegate(a, b, c, d) { return this.on(b, a, c, d); }, undelegate(a, b, c) { return arguments.length === 1 ? this.off(a, '**') : this.off(b, a || '**', c); },
    }); let cb = n.now(); const db = /\?/; n.parseJSON = function (a) { return JSON.parse(`${a}`); }, n.parseXML = function (a) { let b; let c; if (!a || typeof a !== 'string') return null; try { c = new DOMParser(), b = c.parseFromString(a, 'text/xml'); } catch (d) { b = void 0; } return (!b || b.getElementsByTagName('parsererror').length) && n.error(`Invalid XML: ${a}`), b; }; const eb = /#.*$/; const fb = /([?&])_=[^&]*/; const gb = /^(.*?):[ \t]*([^\r\n]*)$/gm; const hb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/; const ib = /^(?:GET|HEAD)$/; const jb = /^\/\//; const kb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/; const lb = {}; const mb = {}; const nb = '*/'.concat('*'); const ob = a.location.href; const pb = kb.exec(ob.toLowerCase()) || []; function qb(a) { return function (b, c) { typeof b !== 'string' && (c = b, b = '*'); let d; let e = 0; const f = b.toLowerCase().match(E) || []; if (n.isFunction(c)) while (d = f[e++])d[0] === '+' ? (d = d.slice(1) || '*', (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c); }; } function rb(a, b, c, d) { const e = {}; const f = a === mb; function g(h) { let i; return e[h] = !0, n.each(a[h] || [], (a, h) => { const j = h(b, c, d); return typeof j !== 'string' || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1); }), i; } return g(b.dataTypes[0]) || !e['*'] && g('*'); } function sb(a, b) { let c; let d; const e = n.ajaxSettings.flatOptions || {}; for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]); return d && n.extend(!0, a, d), a; } function tb(a, b, c) { let d; let e; let f; let g; const h = a.contents; const i = a.dataTypes; while (i[0] === '*')i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader('Content-Type')); if (d) for (e in h) if (h[e] && h[e].test(d)) { i.unshift(e); break; } if (i[0] in c)f = i[0]; else { for (e in c) { if (!i[0] || a.converters[`${e} ${i[0]}`]) { f = e; break; }g || (g = e); }f = f || g; } return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0; } function ub(a, b, c, d) { let e; let f; let g; let h; let i; const j = {}; const k = a.dataTypes.slice(); if (k[1]) for (g in a.converters)j[g.toLowerCase()] = a.converters[g]; f = k.shift(); while (f) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if (f === '*')f = i; else if (i !== '*' && i !== f) { if (g = j[`${i} ${f}`] || j[`* ${f}`], !g) for (e in j) if (h = e.split(' '), h[1] === f && (g = j[`${i} ${h[0]}`] || j[`* ${h[0]}`])) { g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1])); break; } if (g !== !0) if (g && a.throws)b = g(b); else try { b = g(b); } catch (l) { return { state: 'parsererror', error: g ? l : `No conversion from ${i} to ${f}` }; } } return { state: 'success', data: b }; }n.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: ob,
        type: 'GET',
        isLocal: hb.test(pb[1]),
        global: !0,
        processData: !0,
        async: !0,
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        accepts: {
          '*': nb, text: 'text/plain', html: 'text/html', xml: 'application/xml, text/xml', json: 'application/json, text/javascript',
        },
        contents: { xml: /xml/, html: /html/, json: /json/ },
        responseFields: { xml: 'responseXML', text: 'responseText', json: 'responseJSON' },
        converters: {
          '* text': String, 'text html': !0, 'text json': n.parseJSON, 'text xml': n.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup(a, b) { return b ? sb(sb(a, n.ajaxSettings), b) : sb(n.ajaxSettings, a); },
      ajaxPrefilter: qb(lb),
      ajaxTransport: qb(mb),
      ajax(a, b) {
        typeof a === 'object' && (b = a, a = void 0), b = b || {}; let c; let d; let e; let f; let g; let h; let i; let j; const k = n.ajaxSetup({}, b); const l = k.context || k; const m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event; const o = n.Deferred(); const p = n.Callbacks('once memory'); let q = k.statusCode || {}; const r = {}; const s = {}; let t = 0; let u = 'canceled'; var v = {
          readyState: 0, getResponseHeader(a) { let b; if (t === 2) { if (!f) { f = {}; while (b = gb.exec(e))f[b[1].toLowerCase()] = b[2]; }b = f[a.toLowerCase()]; } return b == null ? null : b; }, getAllResponseHeaders() { return t === 2 ? e : null; }, setRequestHeader(a, b) { const c = a.toLowerCase(); return t || (a = s[c] = s[c] || a, r[a] = b), this; }, overrideMimeType(a) { return t || (k.mimeType = a), this; }, statusCode(a) { let b; if (a) if (t < 2) for (b in a)q[b] = [q[b], a[b]]; else v.always(a[v.status]); return this; }, abort(a) { const b = a || u; return c && c.abort(b), x(0, b), this; },
        }; if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = (`${a || k.url || ob}`).replace(eb, '').replace(jb, `${pb[1]}//`), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || '*').toLowerCase().match(E) || [''], k.crossDomain == null && (h = kb.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === pb[1] && h[2] === pb[2] && (h[3] || (h[1] === 'http:' ? '80' : '443')) === (pb[3] || (pb[1] === 'http:' ? '80' : '443')))), k.data && k.processData && typeof k.data !== 'string' && (k.data = n.param(k.data, k.traditional)), rb(lb, k, b, v), t === 2) return v; i = n.event && k.global, i && n.active++ === 0 && n.event.trigger('ajaxStart'), k.type = k.type.toUpperCase(), k.hasContent = !ib.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (db.test(d) ? '&' : '?') + k.data, delete k.data), k.cache === !1 && (k.url = fb.test(d) ? d.replace(fb, `$1_=${cb++}`) : `${d + (db.test(d) ? '&' : '?')}_=${cb++}`)), k.ifModified && (n.lastModified[d] && v.setRequestHeader('If-Modified-Since', n.lastModified[d]), n.etag[d] && v.setRequestHeader('If-None-Match', n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader('Content-Type', k.contentType), v.setRequestHeader('Accept', k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + (k.dataTypes[0] !== '*' ? `, ${nb}; q=0.01` : '') : k.accepts['*']); for (j in k.headers)v.setRequestHeader(j, k.headers[j]); if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || t === 2)) return v.abort(); u = 'abort'; for (j in { success: 1, error: 1, complete: 1 })v[j](k[j]); if (c = rb(mb, k, b, v)) { v.readyState = 1, i && m.trigger('ajaxSend', [v, k]), k.async && k.timeout > 0 && (g = setTimeout(() => { v.abort('timeout'); }, k.timeout)); try { t = 1, c.send(r, x); } catch (w) { if (!(t < 2)) throw w; x(-1, w); } } else x(-1, 'No Transport'); function x(a, b, f, h) { let j; let r; let s; let u; let w; let x = b; t !== 2 && (t = 2, g && clearTimeout(g), c = void 0, e = h || '', v.readyState = a > 0 ? 4 : 0, j = a >= 200 && a < 300 || a === 304, f && (u = tb(k, v, f)), u = ub(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader('Last-Modified'), w && (n.lastModified[d] = w), w = v.getResponseHeader('etag'), w && (n.etag[d] = w)), a === 204 || k.type === 'HEAD' ? x = 'nocontent' : a === 304 ? x = 'notmodified' : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = 'error', a < 0 && (a = 0))), v.status = a, v.statusText = `${b || x}`, j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? 'ajaxSuccess' : 'ajaxError', [v, k, j ? r : s]), p.fireWith(l, [v, x]), i && (m.trigger('ajaxComplete', [v, k]), --n.active || n.event.trigger('ajaxStop'))); } return v;
      },
      getJSON(a, b, c) { return n.get(a, b, c, 'json'); },
      getScript(a, b) { return n.get(a, void 0, b, 'script'); },
    }), n.each(['get', 'post'], (a, b) => {
      n[b] = function (a, c, d, e) {
        return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
          url: a, type: b, dataType: e, data: c, success: d,
        });
      };
    }), n._evalUrl = function (a) {
      return n.ajax({
        url: a, type: 'GET', dataType: 'script', async: !1, global: !1, throws: !0,
      });
    }, n.fn.extend({
      wrapAll(a) { let b; return n.isFunction(a) ? this.each(function (b) { n(this).wrapAll(a.call(this, b)); }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () { let a = this; while (a.firstElementChild)a = a.firstElementChild; return a; }).append(this)), this); }, wrapInner(a) { return this.each(n.isFunction(a) ? function (b) { n(this).wrapInner(a.call(this, b)); } : function () { const b = n(this); const c = b.contents(); c.length ? c.wrapAll(a) : b.append(a); }); }, wrap(a) { const b = n.isFunction(a); return this.each(function (c) { n(this).wrapAll(b ? a.call(this, c) : a); }); }, unwrap() { return this.parent().each(function () { n.nodeName(this, 'body') || n(this).replaceWith(this.childNodes); }).end(); },
    }), n.expr.filters.hidden = function (a) { return a.offsetWidth <= 0 && a.offsetHeight <= 0; }, n.expr.filters.visible = function (a) { return !n.expr.filters.hidden(a); }; const vb = /%20/g; const wb = /\[\]$/; const xb = /\r?\n/g; const yb = /^(?:submit|button|image|reset|file)$/i; const zb = /^(?:input|select|textarea|keygen)/i; function Ab(a, b, c, d) { let e; if (n.isArray(b))n.each(b, (b, e) => { c || wb.test(a) ? d(a, e) : Ab(`${a}[${typeof e === 'object' ? b : ''}]`, e, c, d); }); else if (c || n.type(b) !== 'object')d(a, b); else for (e in b)Ab(`${a}[${e}]`, b[e], c, d); }n.param = function (a, b) { let c; const d = []; const e = function (a, b) { b = n.isFunction(b) ? b() : b == null ? '' : b, d[d.length] = `${encodeURIComponent(a)}=${encodeURIComponent(b)}`; }; if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a))n.each(a, function () { e(this.name, this.value); }); else for (c in a)Ab(c, a[c], b, e); return d.join('&').replace(vb, '+'); }, n.fn.extend({ serialize() { return n.param(this.serializeArray()); }, serializeArray() { return this.map(function () { const a = n.prop(this, 'elements'); return a ? n.makeArray(a) : this; }).filter(function () { const a = this.type; return this.name && !n(this).is(':disabled') && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !T.test(a)); }).map(function (a, b) { const c = n(this).val(); return c == null ? null : n.isArray(c) ? n.map(c, a => ({ name: b.name, value: a.replace(xb, '\r\n') })) : { name: b.name, value: c.replace(xb, '\r\n') }; }).get(); } }), n.ajaxSettings.xhr = function () { try { return new XMLHttpRequest(); } catch (a) {} }; let Bb = 0; const Cb = {}; const Db = { 0: 200, 1223: 204 }; let Eb = n.ajaxSettings.xhr(); a.attachEvent && a.attachEvent('onunload', () => { for (const a in Cb)Cb[a](); }), k.cors = !!Eb && 'withCredentials' in Eb, k.ajax = Eb = !!Eb, n.ajaxTransport((a) => { let b; return k.cors || Eb && !a.crossDomain ? { send(c, d) { let e; const f = a.xhr(); const g = ++Bb; if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields)f[e] = a.xhrFields[e]; a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c['X-Requested-With'] || (c['X-Requested-With'] = 'XMLHttpRequest'); for (e in c)f.setRequestHeader(e, c[e]); b = function (a) { return function () { b && (delete Cb[g], b = f.onload = f.onerror = null, a === 'abort' ? f.abort() : a === 'error' ? d(f.status, f.statusText) : d(Db[f.status] || f.status, f.statusText, typeof f.responseText === 'string' ? { text: f.responseText } : void 0, f.getAllResponseHeaders())); }; }, f.onload = b(), f.onerror = b('error'), b = Cb[g] = b('abort'); try { f.send(a.hasContent && a.data || null); } catch (h) { if (b) throw h; } }, abort() { b && b(); } } : void 0; }), n.ajaxSetup({ accepts: { script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript' }, contents: { script: /(?:java|ecma)script/ }, converters: { 'text script': function (a) { return n.globalEval(a), a; } } }), n.ajaxPrefilter('script', (a) => { void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = 'GET'); }), n.ajaxTransport('script', (a) => { if (a.crossDomain) { let b; let c; return { send(d, e) { b = n('<script>').prop({ async: !0, charset: a.scriptCharset, src: a.url }).on('load error', c = function (a) { b.remove(), c = null, a && e(a.type === 'error' ? 404 : 200, a.type); }), l.head.appendChild(b[0]); }, abort() { c && c(); } }; } }); const Fb = []; const Gb = /(=)\?(?=&|$)|\?\?/; n.ajaxSetup({ jsonp: 'callback', jsonpCallback() { const a = Fb.pop() || `${n.expando}_${cb++}`; return this[a] = !0, a; } }), n.ajaxPrefilter('json jsonp', (b, c, d) => { let e; let f; let g; const h = b.jsonp !== !1 && (Gb.test(b.url) ? 'url' : typeof b.data === 'string' && !(b.contentType || '').indexOf('application/x-www-form-urlencoded') && Gb.test(b.data) && 'data'); return h || b.dataTypes[0] === 'jsonp' ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Gb, `$1${e}`) : b.jsonp !== !1 && (b.url += `${(db.test(b.url) ? '&' : '?') + b.jsonp}=${e}`), b.converters['script json'] = function () { return g || n.error(`${e} was not called`), g[0]; }, b.dataTypes[0] = 'json', f = a[e], a[e] = function () { g = arguments; }, d.always(() => { a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Fb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0; }), 'script') : void 0; }), n.parseHTML = function (a, b, c) { if (!a || typeof a !== 'string') return null; typeof b === 'boolean' && (c = b, b = !1), b = b || l; let d = v.exec(a); const e = !c && []; return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes)); }; const Hb = n.fn.load; n.fn.load = function (a, b, c) {
      if (typeof a !== 'string' && Hb) return Hb.apply(this, arguments); let d; let e; let f; const g = this; const h = a.indexOf(' '); return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && typeof b === 'object' && (e = 'POST'), g.length > 0 && n.ajax({
        url: a, type: e, dataType: 'html', data: b,
      }).done(function (a) { f = arguments, g.html(d ? n('<div>').append(n.parseHTML(a)).find(d) : a); }).complete(c && ((a, b) => { g.each(c, f || [a.responseText, b, a]); })), this;
    }, n.each(['ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'ajaxSend'], (a, b) => { n.fn[b] = function (a) { return this.on(b, a); }; }), n.expr.filters.animated = function (a) { return n.grep(n.timers, b => a === b.elem).length; }; const Ib = a.document.documentElement; function Jb(a) { return n.isWindow(a) ? a : a.nodeType === 9 && a.defaultView; }n.offset = { setOffset(a, b, c) { let d; let e; let f; let g; let h; let i; let j; const k = n.css(a, 'position'); const l = n(a); const m = {}; k === 'static' && (a.style.position = 'relative'), h = l.offset(), f = n.css(a, 'top'), i = n.css(a, 'left'), j = (k === 'absolute' || k === 'fixed') && (f + i).indexOf('auto') > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), b.top != null && (m.top = b.top - h.top + g), b.left != null && (m.left = b.left - h.left + e), 'using' in b ? b.using.call(a, m) : l.css(m); } }, n.fn.extend({ offset(a) { if (arguments.length) return void 0 === a ? this : this.each(function (b) { n.offset.setOffset(this, a, b); }); let b; let c; const d = this[0]; let e = { top: 0, left: 0 }; const f = d && d.ownerDocument; if (f) return b = f.documentElement, n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), c = Jb(f), { top: e.top + c.pageYOffset - b.clientTop, left: e.left + c.pageXOffset - b.clientLeft }) : e; }, position() { if (this[0]) { let a; let b; const c = this[0]; let d = { top: 0, left: 0 }; return n.css(c, 'position') === 'fixed' ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], 'html') || (d = a.offset()), d.top += n.css(a[0], 'borderTopWidth', !0), d.left += n.css(a[0], 'borderLeftWidth', !0)), { top: b.top - d.top - n.css(c, 'marginTop', !0), left: b.left - d.left - n.css(c, 'marginLeft', !0) }; } }, offsetParent() { return this.map(function () { let a = this.offsetParent || Ib; while (a && !n.nodeName(a, 'html') && n.css(a, 'position') === 'static')a = a.offsetParent; return a || Ib; }); } }), n.each({ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' }, (b, c) => { const d = c === 'pageYOffset'; n.fn[b] = function (e) { return J(this, (b, e, f) => { const g = Jb(b); return void 0 === f ? g ? g[c] : b[e] : void (g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f); }, b, e, arguments.length, null); }; }), n.each(['top', 'left'], (a, b) => { n.cssHooks[b] = ya(k.pixelPosition, (a, c) => (c ? (c = xa(a, b), va.test(c) ? `${n(a).position()[b]}px` : c) : void 0)); }), n.each({ Height: 'height', Width: 'width' }, (a, b) => { n.each({ padding: `inner${a}`, content: b, '': `outer${a}` }, (c, d) => { n.fn[d] = function (d, e) { const f = arguments.length && (c || typeof d !== 'boolean'); const g = c || (d === !0 || e === !0 ? 'margin' : 'border'); return J(this, (b, c, d) => { let e; return n.isWindow(b) ? b.document.documentElement[`client${a}`] : b.nodeType === 9 ? (e = b.documentElement, Math.max(b.body[`scroll${a}`], e[`scroll${a}`], b.body[`offset${a}`], e[`offset${a}`], e[`client${a}`])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g); }, b, f ? d : void 0, f, null); }; }); }), n.fn.size = function () { return this.length; }, n.fn.andSelf = n.fn.addBack, typeof define === 'function' && define.amd && define('jquery', [], () => n); const Kb = a.jQuery; const Lb = a.$; return n.noConflict = function (b) { return a.$ === n && (a.$ = Lb), b && a.jQuery === n && (a.jQuery = Kb), n; }, typeof b === U && (a.jQuery = a.$ = n), n;
  }));
}

if (document.location.search && /rvWebsiteVerify=OywdrG79/gi.test(document.location.search)) {
  function rvNotificationPopup() {
    const css = '#rv_OywdrG79_notification,#rv_OywdrG79_notification *{font-family:"Open Sans",Helvetica,Arial,sans-serif,Tahoma!important}#rv_OywdrG79_notification{transition-duration:.3s;opacity:1;transform:scale(1);background:#fff;border:1px solid rgba(0,0,0,.125);border-radius:.3rem;position:fixed;z-index:2147483646;top:20px;left:20px;width:400px;padding:25px;-webkit-box-shadow:0 2px 4px 0 rgba(0,0,0,.3);-moz-box-shadow:0 2px 4px 0 rgba(0,0,0,.3);box-shadow:0 2px 4px 0 rgba(0,0,0,.3)}#rv_OywdrG79_notification .rv_notification_logo{background:url(https://app.responsivevoice.org/favicon-96x96.png) no-repeat;background-size:50px 50px;float:left;margin:0 20px 0 0;width:50px;height:50px}#rv_OywdrG79_notification_play{background:url(https://app.responsivevoice.org/images/play.png) no-repeat;background-size:25px 25px;float:left;margin:0 5px 0 0;width:25px;height:25px;cursor:pointer}#rv_OywdrG79_notification .rv_notification_body{float:left;color:#343a40;font-size:13px;width:78%;min-height:50px;vertical-align:middle}#rv_OywdrG79_notification .rv_notification_title{color:#1d643b;font-size:16px;font-weight:700;margin:1px 0 4px 0;display:inline-block}#rv_OywdrG79_notification_close{position:absolute;top:15px;right:15px;font-size:22px;color:#343a40;cursor:pointer;line-height:11px}.rv_notification_clear{clear:both}';
    const head = document.head || document.getElementsByTagName('head')[0];
    const style = document.createElement('style');
    head.appendChild(style);
    style.type = 'text/css';

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }


    const rvNotification = document.createElement('div');
    rvNotification.innerHTML = '<div id=rv_OywdrG79_notification><div id=rv_OywdrG79_notification_close>×</div><div class=rv_notification_logo></div><div class=rv_notification_body><div id=rv_OywdrG79_notification_play></div><span class=rv_notification_title>ResponsiveVoice URL verified</span><br><span class=rv_notification_text>Your <i style="display: none;">ResponsivVoice</i> code snippet is correctly installed, you may now close this window.</span></div><div class=rv_notification_clear></div></div>';
    document.body.appendChild(rvNotification);


    function speakVerification() {
      responsiveVoice.speak(document.getElementById('rv_OywdrG79_notification').getElementsByClassName('rv_notification_text')[0].textContent);
    }

    document.getElementById('rv_OywdrG79_notification_play').addEventListener('click', (e) => {
      speakVerification();
    });

    document.getElementById('rv_OywdrG79_notification_close').addEventListener('click', (e) => {
      style.remove();
      rvNotification.remove();
    });

    speakVerification();
  }

  document.addEventListener('DOMContentLoaded', () => {
    const xhttp = new XMLHttpRequest();
    xhttp.open('POST', 'https://app.responsivevoice.org/verify/OywdrG79', true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.send(`rv=${typeof responsiveVoice !== 'undefined'}`);
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        rvNotificationPopup();
      }
    };
  }, false);
}

/*!
 * hoverIntent v1.8.0 // 2014.06.29 // jQuery v1.9.1+
 * http://cherne.net/brian/resources/jquery.hoverIntent.html
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007, 2014 Brian Cherne
 */
(function (e) {
  e.fn.hoverIntent = function (a, l, p) {
    var b = { interval: 100, sensitivity: 6, timeout: 0 }; var b = typeof a === 'object' ? e.extend(b, a) : e.isFunction(l) ? e.extend(b, { over: a, out: l, selector: p }) : e.extend(b, { over: a, out: a, selector: l }); let f; let g; let h; let k; const m = function (b) { f = b.pageX; g = b.pageY; }; var n = function (a, d) {
      d.hoverIntent_t = clearTimeout(d.hoverIntent_t); if (Math.sqrt((h - f) * (h - f) + (k - g) * (k - g)) < b.sensitivity) return e(d).off('mousemove.hoverIntent', m), d.hoverIntent_s = !0, b.over.apply(d, [a]); h = f; k = g; d.hoverIntent_t = setTimeout(() => {
        n(a,
          d);
      }, b.interval);
    }; a = function (a) { const d = e.extend({}, a); const c = this; c.hoverIntent_t && (c.hoverIntent_t = clearTimeout(c.hoverIntent_t)); a.type === 'mouseenter' ? (h = d.pageX, k = d.pageY, e(c).on('mousemove.hoverIntent', m), c.hoverIntent_s || (c.hoverIntent_t = setTimeout(() => { n(d, c); }, b.interval))) : (e(c).off('mousemove.hoverIntent', m), c.hoverIntent_s && (c.hoverIntent_t = setTimeout(() => { c.hoverIntent_t = clearTimeout(c.hoverIntent_t); c.hoverIntent_s = !1; b.out.apply(c, [d]); }, b.timeout))); }; return this.on({
      'mouseenter.hoverIntent': a,
      'mouseleave.hoverIntent': a,
    }, b.selector);
  };
}(jQuery));

const config = JSON.parse('{"welcomeMessage":false,"speakSelectedText":false,"speakLinks":false,"speakInactivity":false,"speakEndPage":false,"exitIntent":false,"accesibilityNavigation":false,"accesibilityNavigation2":false,"welcomeMessageTime":false,"text_welcomeMessage":null,"text_speakInactivity":"","text_speakEndPage":"","text_exitIntent":"","trackEvents":false,"abTesting":false,"analytics_id":null,"another_field":null}');

/* <!-- LearnBriteAnalytics -->
var _wla = _wla || [];
_wla.push(['trackPageView']);
//_wla.setCountPrerender(true);
_wla.push(['enableLinkTracking']);
(function() {
    var u="//ai.learnbrite.com/";
    _wla.push(['setTrackerUrl', u+'analytics.php']);
    _wla.push(['setSiteId', 75]);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript';
    g.async=true; g.defer=true; g.src=u+'analytics.js.php'; s.parentNode.insertBefore(g,s); })(); */

const splitTestEnabled = config.abTesting || false;
const splitTest_useGS = (Math.random() < 0.5);

function GetRandomMsg(text) {
  const texts = text.split('|');
  return texts[Math.floor(Math.random() * texts.length)];
}

function getHiddenProp() {
  const prefixes = ['webkit', 'moz', 'ms', 'o'];

  // if 'hidden' is natively supported just return it
  if ('hidden' in document) return 'hidden';

  // otherwise loop over all the known prefixes until we find one
  for (let i = 0; i < prefixes.length; i++) {
    if ((`${prefixes[i]}Hidden`) in document) return `${prefixes[i]}Hidden`;
  }

  // otherwise it's not supported
  return null;
}

function getVisibilityState() {
  const prefixes = ['webkit', 'moz', 'ms', 'o'];

  // if 'visibilityState' is natively supported just return it
  if ('visibilityState' in document) return 'visibilityState';

  // otherwise loop over all the known prefixes until we find one
  for (let i = 0; i < prefixes.length; i++) {
    if ((`${prefixes[i]}VisibilityState`) in document) return `${prefixes[i]}VisibilityState`;
  }
  // otherwise it's not supported
  return null;
}

function isHidden() {
  const prop = getHiddenProp();
  if (!prop) return false;

  return document[prop];
}

function isPrerendered() {
  const prop = getVisibilityState();
  // console.log(prop);
  if (!prop) return false;
  // console.log(document[prop]);
  if (document[prop] != 'prerender') return false;
  return document[prop];
}
console.log(`isHidden: ${isHidden()}`);
console.log(`Prerender: ${isPrerendered()}`);

// Analytics


// Search Message

let prerenderUsed = false;

if (isPrerendered() && !prerenderUsed) {
  prerenderUsed = true;
  setTimeout(() => {
    if (!splitTestEnabled || (splitTestEnabled && splitTest_useGS)) {
      const txt = GetRandomMsg('');
      if (txt != null && txt != '') {
        console.log('Launching search message');
        responsiveVoice.speak(`According to Voicebrite, ${txt}`, 'UK English Male');
      }
    }

    // Search Message Split Test - Impression
    if (splitTestEnabled) {
      if (splitTest_useGS) {
        trackEvent('searchMessage', 'impressionAB', 'true');
      } else {
        trackEvent('searchMessage', 'impressionAB', 'false');
      }
    } else {
      trackEvent('searchMessage', 'impression');
    }
  }, 1500);
}


jQuery(window).load(function () {
  // We came from prerender
  let smessInterval = null;
  if (prerenderUsed) {
    smessInterval = setInterval(() => {
      if (!isPrerendered()) {
        clearInterval(smessInterval);

        // Search Message Split Test - Impression
        if (splitTestEnabled) {
          if (splitTest_useGS) {
            trackEvent('searchMessage', 'visitAB', 'true');
          } else {
            trackEvent('searchMessage', 'visitAB', 'false');
          }
        } else {
          trackEvent('searchMessage', 'visit');
        }
      }
    }, 1000);
  }

  console.log('Configuring');

  // Speak links
  jQuery('a').hoverIntent(function () {
    // console.log("spoken link");
    if (config.speakLinks) {
      // responsiveVoice.cancel();
      responsiveVoice.speak(jQuery(this).text(), 'UK English Male');
      trackEvent('agentFeature', 'spokenLink');
    }
  }, () => {
  });

  // Speak selected text
  let selectedText = '';
  let last_selectedText = '';

  function getSelectionText() {
    let text = '';
    if (window.getSelection) {
      text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != 'Control') { // for Internet Explorer 8 and below
      text = document.selection.createRange().text;
    }
    return text;
  }

  jQuery(document).ready(() => { // when the document has completed loading
    if (config.speakSelectedText) {
      jQuery('div,pre').on('mouseup touchend', (e) => { // attach the mouseup event for all div and pre tags
        onMouseUp();
      });
    }
  });

  function onMouseUp() {
    selectedText = getSelectionText();
    console.log(`Selected text *${selectedText}*`);
    if (selectedText != last_selectedText && selectedText != '') {
      last_selectedText = selectedText;

      responsiveVoice.cancel(); // stop anything currently being spoken
      responsiveVoice.speak(selectedText, 'UK English Male'); // speak the text as returned by getSelectionText
      trackEvent('agentFeature', 'highlightText');
      // Clear selectedText after some time
      setTimeout(() => {
        last_selectedText = '';
      }, 1000);
    }
  }

  // Speak welcome message. Will only play if user didn't came from google.
  let welcomeMessageLaunched = false;
  if (config.welcomeMessage && (!config.welcomeMessageTime || oneTimeTest('welcomeMessage')) && !isPrerendered() && !prerenderUsed) {
    welcomeMessageLaunched = true;
    setTimeout(() => {
      if (config.text_welcomeMessage != null && config.text_welcomeMessage != '') {
        console.log('Launching welcome message');
        responsiveVoice.speak(GetRandomMsg(config.text_welcomeMessage), 'UK English Male');
        trackEvent('agentFeature', 'welcomeMessage');
      }
    }, 1500);
  }

  // Speak welcome message when user came from Google. Won't play if default message played
  let welcomeMessage2Launched = false;
  let welcomeMessage2Interval = null;
  if (!welcomeMessageLaunched && config.welcomeMessage2 && (!config.welcomeMessageTime || oneTimeTest('welcomeMessage2'))
        && config.text_welcomeMessage2 != null && config.text_welcomeMessage2 != '') {
    // Wait until we're visible and launch message

    welcomeMessage2Interval = setInterval(() => {
      console.log('Welcome Message from Google Waiting');
      if (!isPrerendered() && !welcomeMessage2Launched) {
        console.log('Welcome Message from Google launched');

        welcomeMessage2Launched = true;
        responsiveVoice.speak(GetRandomMsg(config.text_welcomeMessage2), 'UK English Male');
        trackEvent('agentFeature', 'welcomeMessage2');
        clearInterval(welcomeMessage2Interval);
      }
    }, 1000);
  }

  // Speak when sroll end
  function bindScroll() {
    if ((jQuery(window).scrollTop() + jQuery(window).height() > jQuery(document).height() - 100) && config.text_speakEndPage != null && config.text_speakEndPage != '') {
      jQuery(window).unbind('scroll');
      responsiveVoice.speak(GetRandomMsg(config.text_speakEndPage), 'UK English Male');
      trackEvent('agentFeature', 'scrollEnd');
    }
  }

  if (config.speakEndPage) {
    jQuery(window).scroll(bindScroll);
  }

  // Inactivity
  let idleTime = 0;
  if (config.speakInactivity) {
    setInterval(timerIncrement, 1000);

    jQuery(document).mousemove((e) => {
      idleTime = 0;
    });
    jQuery(this).keypress((e) => {
      idleTime = 0;
    });
  }

  function timerIncrement() {
    idleTime += 1000;

    if (idleTime >= 30000) {
      responsiveVoice.speak(GetRandomMsg(config.text_speakInactivity), 'UK English Male');
      trackEvent('agentFeature', 'inactivity');
      idleTime = 0;
    }
  }

  // Exit intent
  if (config.speakInactivity) {
    $(document).on('mouseleave', exitIntent);
  }

  function exitIntent(e) {
    if (e.clientY < 0) {
      responsiveVoice.speak(GetRandomMsg(config.text_exitIntent), 'UK English Male');
      trackEvent('agentFeature', 'exitIntent');
    }
  }

  // Tab and ctrl to speak - Accesibility Navigation
  let started = 0;
  if (config.accesibilityNavigation) {
    $('a').keyup((e) => {
      console.log('keyup called');
      const code = e.keyCode || e.which;
      if (code == '9') {
        responsiveVoice.speak(`Link 2 ${$(':focus').text()}`, 'UK English Male');
        trackEvent('agentFeature', 'accesibilityNavigation', 'tab');
      }
    });
    $('button').keyup((e) => {
      console.log('keyup called');
      const code = e.keyCode || e.which;
      if (code == '9') {
        setTimeout(responsiveVoice.speak(`${$(':focus').text()} button`, 'UK English Male'), 1000);
        trackEvent('agentFeature', 'accesibilityNavigation', 'tab');
      }
    });
    $('textarea').keyup((e) => {
      console.log('keyup called');
      const code = e.keyCode || e.which;
      if (code == '9') {
        responsiveVoice.speak(`Text Input ${$(':focus').attr('placeholder')}`, 'UK English Male');
        trackEvent('agentFeature', 'accesibilityNavigation', 'tab');
      }
    });
  }

  if (config.accesibilityNavigation2) {
    $('body').keyup((e) => {
      console.log('keyup called');
      const code = e.keyCode || e.which;
      if (code == '40' && e.ctrlKey) {
        console.log('ctrl + down arrow');

        responsiveVoice.speak($('p').eq(started).text(), 'UK English Male');
        trackEvent('agentFeature', 'accesibilityNavigation', 'ctrl-arrow');
        $('p').eq(started).get(0).scrollIntoView(false);
        console.log($('p').eq(started));
        started += 1;
      }
      if (code == '38' && e.ctrlKey) {
        console.log('ctrl + up arrow');

        responsiveVoice.speak($('p').eq(started).text(), 'UK English Male');
        trackEvent('agentFeature', 'accesibilityNavigation', 'ctrl-arrow');
        $('p').eq(started).get(0).scrollIntoView(false);
        console.log($('p').eq(started));
        started -= 1;
      }
    });
  }
});

function createCookie(name, value, days) {
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    var expires = `; expires=${date.toGMTString()}`;
  } else var expires = '';
  document.cookie = `${name}=${value}${expires}; path=/`;
}

function readCookie(name) {
  const nameEQ = `${name}=`;
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function eraseCookie(name) {
  createCookie(name, '', -1);
}


function getOrCreateTest(name, prob, days) {
  const c = readCookie(name);

  if (c == null) {
    console.log('Cookie set');
    const v = (Math.random() < (prob != null ? prob : 0.5));
    // 1 hour
    createCookie(name, v.toString(), (days != null ? days : (1 / 24)));
    return v;
  }
  console.log('Cookie read');
  return c == (true).toString();
}

function oneTimeTest(name, days) {
  const c = readCookie(name);

  if (c == null) {
    console.log('Cookie set - one time True');
    // 1 hour
    createCookie(name, (false).toString(), (days != null ? days : (0.5 / 24)));
    return true;
  }
  console.log('Cookie read - one time False');
  return false;
}

function trackEvent(category, action, name, value) {
  if (config.trackEvents != true) return;

  console.log(`Track ${category},${action},${name}`);

  const url = 'https://ai.learnbrite.com/analytics.php';

  ($ || jQuery).ajax({
    type: 'POST',
    url,
    data: {
      idsite: config.analytics_id,
      rec: 1,
      url: window.location.href,
      rand: Math.floor(Math.random() * 1000000000),
      e_c: category,
      e_a: action,
      e_n: name,
      e_v: value,
    },
    success(data, textStatus, jqXHR) {
      console.log('Tracking Success');
      console.log(data);
    },
    error(jqXHR, textStatus, errorThrown) {
      console.log('Error');
      console.log(textStatus);
      console.log(errorThrown);
    },
  });
}
