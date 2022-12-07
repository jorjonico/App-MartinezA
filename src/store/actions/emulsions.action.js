export const SELECTED_EMULSIONS = "SELEC_EMULSIONS"
export const FILTERED_EMULSIONS = "FILTERED_EMULSIONS"

export const selectEmulsions = (id) => ({
    type: SELECTED_EMULSIONS,
    emulsionsID: id,
});

export const filteredEmulsions = (id) => ({
    type: FILTERED_EMULSIONS,
    categoryID: id,
});