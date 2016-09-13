'use strict';

const f = function() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(123);
    }, 2000);
  });
};

const testAsync = async function() {
  const t = await f();
  console.log(t);
};

testAsync();