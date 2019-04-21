export const updatePreference = (preference, projects, selected) => {

  // TODO Update preference
  console.log(projects);
  console.log(selected);

// Assign j to the larger of the two project numbers, i to the smaller.
  var j = Math.max(...projects);
  var i = Math.min(...projects);

// Find the right position within the vote integer to store the pref
  var pos = ((j * (j - 1)) / 2) + i;

  console.log(pos);

// Was the larger number preferred?
  var betterj = ( selected === j ) ? 1 : 0;

// If so, it'll be 11, if not, 10 (in binary)
  var pref = betterj ? 3 : 2;

  console.log(pref.toString(2));

// Shift the pref to the correct position in the vote integer
  var a = ( pref << pos * 2 )

// As more selections are made, put them in the vote integer without affecting other prefs
  preference = preference | a;

  console.log(preference.toString(2));

// Convert the final preference to an integer
  preference = parseInt(preference);

  return preference;
}
