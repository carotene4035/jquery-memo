/*
 * 要件一覧: 一応、最低限
 * 1. 編集画面と一覧画面がある
 * 2. 一覧画面のうち1つをclickすると、編集画面に表示され、編集ができるようになる。
 * 3. そのとき、一覧画面にて選択されたものには色がつく。
 * 4. 編集画面にて変更されると、一覧画面の変更時間が更新される。
 * 5. その時、一覧画面にてメモの位置が変わる。最終更新日時順に並びかわる。
 * 6. ローカルストレージに保存される。
 */
(function() {

  /** WorkSpace class **/
  function WorkSpace(element) {
    /** memo情報を保持 */
    this.id;
    this.memo;
  };

  WorkSpace.prototype.init = function() {
  }

  /** 初期化 */
  $(document).ready(function() {
    /** WorkSpaceの初期化  */
    $('.workspace').each(function() {
      $(this).data('data.workspace', new WorkSpace(this));
    });
  });

//  /** workspaceのclickイベントの実装 */
//  $('.workspace').on('keyup', function() {
//    /** 更新が起こるたびに再描画 */
//    console.log(
//      $(this).data('data.workspace')
//    );
//  });
//
//  /** memo cardのclickイベントの実装 */
//  $('.element').on('click', function() {
//    upDateWorkSpace.call(this);
//  });
//
//
//  function upDateWorkSpace() {
//    var data = $(this).data('t.model')
//    data.id  = $(this).data('id');
//    $('.workspace').val(data.memo);
//  }

})();
