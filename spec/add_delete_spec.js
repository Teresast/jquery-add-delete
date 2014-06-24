describe("jasmin_add_delete.Fixtures", function() {

    beforeEach(function () {
       jasmine.getFixtures().fixturesPath = 'spec/fixtures/';
       loadFixtures('jquery_add_delete.html');
    });

    describe("default initial config values", function () {
        it("should have inputMessage", function () {
            var arr = ['Qiu Juntao', 'Jia Wei', 'Shen Tong'];
            add_delete_jquery.addWhenLoad(arr);
            expect($(".inputTxt").length).toBe(3);
            });

        });
    describe("should add item when click add", function () {
        it("should add item when click add", function () {
            var arr = ['Qiu Juntao', 'Jia Wei', 'Shen Tong'];

            add_delete_jquery.addWhenLoad(arr);
            var input = "testText";
            add_delete_jquery.addElements(input);
            expect($(".inputTxt").length).toBe(4);

        })
    });
    describe("should delete item when click X",function () {
        it("should delete item when click X",function () {
            var arr = ['Qiu Juntao', 'Jia Wei', 'Shen Tong'];

            add_delete_jquery.addWhenLoad(arr);
            var deleteItem = $(".inputTxt:first-child > input");
            console.log(deleteItem);
            deleteItem.click();
            expect($(".inputTxt").length).toBe(2);

        })
    })
    });
