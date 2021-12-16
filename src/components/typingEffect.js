export default function typingEffect({
  text = '',
  textArray = ['Alpine JS is Awesome', 'WoooW!!!'],
  textIndex = 0,
  charIndex = 0,
  typeSpeed = 100,
  direction = 'forward',
  pauseEnd = 1000,
  pauseStart = 1000,
}) {
  return {
    text,
    textArray,
    textIndex,
    charIndex,
    typeSpeed,
    direction,
    pauseEnd,
    pauseStart,

    init() {
      setInterval(() => {
        const current = this.textArray[this.textIndex];

        if (this.charIndex > current.length) {
          this.direction = 'backward';
        }

        this.text = current.substring(0, this.charIndex);

        if (this.direction === 'forward') {
          this.charIndex += 1;
        } else {
          this.charIndex -= 1;

          if (this.charIndex == 0) {
            this.direction = 'forward';

            // true: set textIndex to 0
            // false: increment textIndex by 1
            const isCurrentIndexLast =
              this.textIndex === this.textArray.length - 1;
            this.textIndex = isCurrentIndexLast ? 0 : ++this.textIndex;
          }
        }
      }, this.typeSpeed);
    },
  };
}
