/*
 * 要件一覧: 一応、最低限
 * 1. 編集画面と一覧画面がある
 * 2. 一覧画面のうち1つをclickすると、編集画面に表示され、編集ができるようになる。
 * 3. そのとき、一覧画面にて選択されたものには色がつく。
 * 4. 編集画面にて変更されると、一覧画面の変更時間が更新される。
 * 5. その時、一覧画面にてメモの位置が変わる。最終更新日時順に並びかわる。
 * 6. ローカルストレージに保存される。
 */
(function(global) {
  /*
   * Memo class
   */
  function Memo(element) {
    this.element = element;
    this.id = $(element).data('id');

    /** titleとcontent */
    this.title   = $(element).find('.title').text();
    this.content = $(element).find('.content').text();

    console.log(this);
  }

  Memo.prototype.updateMemo = function(content) {
    /** viewの更新 */
    $(this.element).text(content);
    /** modelの更新 */
    this.content = content;
  }

  Memo.prototype.setActive = function() {
    $(this.element).addClass('active');
  }

  Memo.prototype.setNonActive = function() {
    $(this.element).removeClass('active');
  }

  Memo.prototype.delete = function() {
    $(this.element).remove();
  }

  global.Memo = Memo;

})(this);
