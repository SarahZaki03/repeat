//import Vue from 'vue'

export const store = {
    debug: true,
    state: {
        ayatIsdisplayed: false,
        // ayatIsDisplayed 
        // = False => This mean Ayat part is shown
        // = True  => Hide it, to give more space to user
    },
    getAyatState() {
      if (this.debug) console.log('getAyatState triggered');
      return this.state.ayatIsdisplayed;
    },
    setAyatState(newValue) {
      if (this.debug) console.log('setAyatState triggered with', newValue);
      this.state.ayatIsdisplayed = newValue;
    }
}