export const resultValidator = (result) => {
    return result === 0 || result === 32 
      ? result
      : !Number(result)
      ? " not calculated. Insert a valid number."
      : result.toFixed(2);
  };

  export const inputValidator = (val) => {
    const reg = /^[0-9'.\-\b]+$/;
    if (!val || reg.test(val)) {
    return val;}
  };