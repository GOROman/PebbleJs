/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

// 使用するコンポーネント
var UI = require('ui');
var Vector2 = require('vector2');

// カードを生成
var main = new UI.Card({
  // タイトル
  title: 'Pebble.js',
  // アイコン
  icon: 'images/menu_icon.png',
  // サブタイトル
  subtitle: 'Hello World!',
  // 本文
  body: 'Press any button.'
});


// カードを表示
main.show();

// 上ボタンクリック時
main.on('click', 'up', function(e) {
  var menu = new UI.Menu({
    sections: [{
      items: [{
        title: 'Pebble.js',
        icon: 'images/menu_icon.png',
        subtitle: 'Can do Menus'
      }, {
        title: 'Second Item',
        subtitle: 'Subtitle Text'
      }]
    }]
  });
  menu.on('select', function(e) {
    console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
    console.log('The item is titled "' + e.item.title + '"');
  });
  menu.show();
});

// selectボタンクリック時
main.on('click', 'select', function(e) {
  var wind = new UI.Window({
    // フルスクリーン有効
    fullscreen: true,
  });

  var textfield = new UI.Text({
    position:  new Vector2(0, 65),
    size:      new Vector2(144, 30),
    font:      'gothic-24-bold',
    text:      'Text Anywhere!',
    textAlign: 'center'
  });

  wind.add(textfield);

  // ウィンドウ表示
  wind.show();
});

// 下ボタンクリック時
main.on('click', 'down', function(e) {
  var card = new UI.Card();
  card.title('A Card');
  card.subtitle('Is a Window');
  card.body('The simplest window type in Pebble.js.');
  card.show();
});
