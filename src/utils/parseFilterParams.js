const parseType = (type) => {
  const isString = typeof type === 'string';
  if (!isString) return;

  const isValidType = (type) => ['work', 'home', 'personal'].includes(type);
  if (isValidType(type)) {
    return type;
  }
};

const parseFavourite = (favour) => {
  const isString = typeof favour === 'string';
  if (!isString) return;

  const parsedFavourite = favour.toLowerCase();
  if (parsedFavourite === 'true') {
    return true;
  } else if (parsedFavourite === 'false') {
    return false;
  }

  return;
};

export const parseFilterParams = (query) => {
  const { contactType, isFavourite } = query;

  const parsedType = parseType(contactType);
  const parsedIsFavourite = parseFavourite(isFavourite);

  return {
    contactType: parsedType,
    isFavourite: parsedIsFavourite,
  };
};
