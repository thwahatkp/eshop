function isNull(field: any): boolean {
  return (
    field === null ||
    field === undefined ||
    field === "" ||
    typeof field === "undefined"
  );
}

export { isNull };
