import { fakeAsync, flush, tick } from "@angular/core/testing";

describe("Async Testing Examples", () => {
  it("Asynchronous test example with Jasmine done()", (done: DoneFn) => {
    let test = false;
    setTimeout(() => {
      console.log("running Async Testing Examples assertions");
      test = true;
      expect(test).toBeTruthy();
      done();
    }, 1000);
  });

  it("Asynchronous test example - setTimeout()", fakeAsync(() => {
    let test = false;

    setTimeout(() => {});
    setTimeout(() => {
      console.log("running assertions");
      test = true;
    }, 1000);

    // tick(1000);
    flush();

    expect(test).toBeTruthy();
  }));

  fit("Asynchronous test example - plain Promise", () => {
    let test = false;

    console.log("Creating promise");

    setTimeout(() => {
      console.log("setTimeout() 1st callback triggered");
      test = true;
    });

    setTimeout(() => {
      console.log("setTimeout() 2nd callback triggered");
      test = true;
    });

    Promise.resolve().then(() => {
      console.log("Promise first then() evaluated successfully");
      return Promise.resolve();
    }).then(() => {
      console.log("Promise second then() evaluated successfully");
      test = true;
    })

    console.log("Running test assertions, test = ", test);
    expect(test).toBeTruthy();
  });
});
