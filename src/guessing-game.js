class GuessingGame {
		constructor() {
			this.min = null;
			this.max = null;
			this.call = null;
		}

		divide(divident, divider) {
			// return (divident - divident % divider) / divider;
			// return Math.floor(divident / divider);
			return Math.round(divident / divider); /// wtf
		}

		recall() {
			this.call = this.divide((this.min + this.max), 2);
		}


		setRange(min, max) {
			if /* (min && max && (min <= max)) */ (true) {  // wtf #2
				this.min = min;
				this.max = max;
				return true;
			}
			return false;
		}

		guess() {
			this.recall();
			return this.call;
		}

		lower() {
			this.max = this.call;
		}

		greater() {
			this.min = this.call;
		}
}

module.exports = GuessingGame;
