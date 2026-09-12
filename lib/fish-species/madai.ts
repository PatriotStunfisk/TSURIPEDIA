import {defineFishSpecies} from './define';

export default defineFishSpecies({
  "base": {
    "slug": "madai",
    "name": "マダイ",
    "en": "Red seabream",
    "scientific": "Pagrus major",
    "season": "春・秋",
    "difficulty": 3,
    "danger": "低",
    "methods": [
      "タイラバ",
      "ひとつテンヤ",
      "コマセ"
    ],
    "areas": [
      "明石",
      "瀬戸内",
      "和歌山"
    ],
    "depth": "20〜100m",
    "size": "30〜80cm",
    "desc": "日本を代表する人気魚。タイラバなら初心者でも大型魚とのファイトを楽しめます。",
    "accent": "#f3a7a7",
    "months": [
      3,
      4,
      5,
      9,
      10,
      11
    ],
    "beginner": true,
    "kids": false
  },
  "detail": {
    "family": "タイ科",
    "genus": "マダイ属",
    "aliases": [
      "タイ",
      "桜鯛"
    ],
    "habitat": "岩礁・砂礫底・瀬の周辺",
    "diet": "甲殻類、貝類、ゴカイ、小魚",
    "behavior": "底付近を中心に行動し、季節によって水深を変える",
    "lifespan": "20年以上生きる個体もいる",
    "taste": "上品な旨味があり、刺身・焼き物・煮物・汁物まで幅広い",
    "cooking": [
      "刺身",
      "炙り",
      "塩焼き",
      "鯛めし",
      "煮付け",
      "潮汁"
    ],
    "seasonNote": "春の乗っ込み期と秋は人気が高い。地域によっては一年を通して船から狙える。",
    "beginnerTip": "タイラバは底を取って一定速度で巻くのが基本。アタリがあっても慌てて強く合わせず、そのまま巻き続けるのがコツ。",
    "safety": "背びれの棘に注意。大型は口の力も強いため、取り込み後はフィッシュグリップが安全。",
    "body": "桜色の体と青い小斑点が特徴。成熟した大型個体は頭部が張り出し、迫力のある顔つきになります。",
    "fishing": "タイラバ、ひとつテンヤ、コマセ釣りなどが代表的。明石海峡のような潮の速い海域では重量選択も重要です。",
    "trivia": "「めでたい」に通じる縁起魚として、日本では古くから祝いの席で親しまれてきました。"
  },
  "launch": {
    "catchPhrase": "桜色の王様。巻くだけでも出会える。",
    "identify": [
      "桜色〜赤色の高い体高",
      "体側に青い小斑点",
      "尾びれ後縁が黒っぽく見える",
      "大型ほど頭部が張り出す"
    ],
    "imageNotes": [
      "全身：高い体高と桜色の魚体",
      "体側：青い小斑点を拡大",
      "生息：岩礁・砂礫底・瀬周り",
      "食味：刺身・塩焼き・鯛めしまで万能"
    ],
    "related": [
      "チダイ",
      "キダイ",
      "クロダイ"
    ],
    "methodLinks": [
      {
        "label": "タイラバ",
        "href": "/methods/tai-rubber"
      },
      {
        "label": "ひとつテンヤ",
        "href": "/methods"
      },
      {
        "label": "コマセ釣り",
        "href": "/methods"
      }
    ],
    "spotFocus": "明石・瀬戸内・和歌山"
  },
  "tableGuide": {
    "lead": "上品な白身は生食から汁物まで幅広く、一尾まるごと楽しめる。",
    "dishes": [
      {
        "name": "刺身",
        "src": "/images/fish/madai-sashimi.jpg",
        "desc": "透明感のある白身と上品な甘みを楽しめる王道。"
      },
      {
        "name": "炙り",
        "src": "/images/fish/madai-aburi.jpg",
        "desc": "皮目を香ばしく炙ると旨味と香りが引き立つ。"
      },
      {
        "name": "鯛めし",
        "src": "/images/fish/madai-taimeshi.jpg",
        "desc": "骨やアラの出汁まで使えるマダイらしい定番料理。"
      },
      {
        "name": "潮汁",
        "src": "/images/fish/madai-ushiojiru.jpg",
        "desc": "アラから出る上品な出汁をシンプルに味わえる。"
      }
    ]
  },
  "featuredOrder": 6
});
