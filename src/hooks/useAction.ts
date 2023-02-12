export function useAction(
  initialValue: any,
  referenceValue: any,
  setView: (data: any) => void,
  setResult: (data: any) => void
) {
  function add() {
    let newValue = initialValue + 1;
    setView(newValue);
    setResult(newValue * referenceValue);
  }

  function sub() {
    if (initialValue > 0) {
      let newValue = initialValue - 1;
      setView(newValue);
      setResult(newValue * referenceValue);
    }
  }

  function handleChange(e: any) {
    if (!isNaN(Number(e.target.value))) {
      let newValue = Number(e.target.value);
      setView(newValue);
      setResult(newValue * referenceValue);
    }
  }

  return {
    add,
    sub,
    handleChange,
  };
}
