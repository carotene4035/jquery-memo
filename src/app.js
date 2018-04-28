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

  /** 初期化 */
  $(document).ready(function() {
    /** WorkSpaceの初期化  */
    $('.workspace').each(function() {
      $(this).data('data.workspace', new WorkSpace(this));
    });

    /** Memoの初期化 */
    $('.element').each(function() {
      $(this).data('data.memo', new Memo(this));
    });
  });

  /** workspaceのclickイベントの実装 */
  $('.workspace').on('keyup', function() {
    var wo =  $(this).data('data.workspace')
    wo.updateContent();
  });

  $('.element').on('click', function() {
    upDateWorkSpace.call(this);
  });

  function upDateWorkSpace() {
    var memoObj = $(this).data('data.memo')
    memoObj.setActive();
    var wo = $('.workspace').data('data.workspace');
    wo.setCurrentMemo(memoObj);
  }
})();
