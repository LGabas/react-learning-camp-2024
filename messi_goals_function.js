function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    if (typeof laLigaGoals === 'number' && typeof copaDelReyGoals === 'number' && typeof championsLeagueGoals === 'number'){
        return laLigaGoals + copaDelReyGoals + championsLeagueGoals
    }
    else{
       console.error('Error: all parameters must be integers.')
    }
  }

  console.log(goals(10, 5, 2))
//   console.log(goals(5, '1' ,2, ['d']))