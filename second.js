const func_merge = (basic_info, preferences) => {
    merge_func = {
        ...basic_info,
        ...preferences
    }
    return merge_func
};
// This is the first object....
const basic_info = {
    name: "Biswarup Dutta",
    age: 22,
    email: 'network@gmail.com'
}
// This is the second object....
const preferences = {
    theme: 'Machine Learning',
    language: 'English',
    notifications: 'Working are to be update'
}
console.log('The merged function: ',func_merge(basic_info, preferences))