const userName = 'Alessio';

type UserName = typeof userName; //ts feature


const settings = {
    difficulty: 'easy',
    minLevel: 10,
    didStart: true
};

type Settings = typeof settings; //it will automatically take the correct types of the settings

//keyof is used to extend another placeholder sometimes

//I CAN EXTRACT SOME PROPERTIES WITH []
// type Perms = AppUser['permissions'] -> this will get me the types of the part permission of appuser

