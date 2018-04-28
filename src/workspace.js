(function(global) {
  /*
   * WorkSpace class
   */

  function WorkSpace(element) {
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

  global.WorkSpace = WorkSpace;

})(this);
