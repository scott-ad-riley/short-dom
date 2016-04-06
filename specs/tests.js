describe("qs() should", function () {
    var el = document.createElement("div");
    el.id = 'myDiv';
    document.body.appendChild(el);
    var el = document.createElement("div");
    el.class = 'myDivClass';
    document.body.appendChild(el)

    it("return a single element", function () {
      var myEl = document.getElementById('myDiv');
      var result = qs('#myDiv');
      assert.equal(result, myEl);
    });


});