describe("GithubApp.Contributers", function (Contributers) {
    it("should have 2 listeners registered", function () {
        expect(new Contributers.Controller.test()).isEqual('test')
    });
});