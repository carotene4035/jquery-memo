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
  /*
   * Memo class
   */
  function Memo(element) {
    this.element = element;
    this.id = $(element).data('id');
    this.content = $(element).text();
  }

  Memo.prototype.updateMemo = function(content) {
    /** viewの更新 */
    $(this.element).text(content);
    /** modelの更新 */
    this.content = content;
    console.log(this);
  }

  Memo.prototype.setActive = function() {
    $(this.element).addClass('active');
  }

  Memo.prototype.setNonActive = function() {
    $(this.element).removeClass('active');
  }

  /*
   * WorkSpace class
   */
  function WorkSpace(element) {
    /** memo情報を保持 */
    this.element = element;
    this.currentMemo;
  };

  /** 現在編集中のメモを渡す */
  WorkSpace.prototype.setCurrentMemo = function(memoObj) {
    if (this.currentMemo !== undefined) {
      this.currentMemo.setNonActive();
    }
    this.currentMemo = memoObj;
    this._render(this.currentMemo.content);
  }

  WorkSpace.prototype._render = function(content) {
    $(this.element).val(content);
  }

  WorkSpace.prototype.updateContent = function() {
    var str = $(this.element).val();
    /** memoを更新 */
    this.currentMemo.updateMemo(str);
  }

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
