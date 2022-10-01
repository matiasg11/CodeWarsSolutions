function myLanguages(results) {
return Object.keys(results).filter((m) => results[m] >= 60).sort((a,b) => results[b]-results[a])
}
