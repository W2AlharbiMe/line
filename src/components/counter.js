export default function counter(start = 0, jump = 1) {
  return {
    start,
    jump,

    add() {
      this.start += parseInt(this.jump);
    },

    subtract() {
      this.start -= parseInt(this.jump);
    },
  };
}
