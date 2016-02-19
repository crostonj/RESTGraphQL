import {
GraphQLInt,
GraphQLObjectType,
GraphQLString,
GraphQLNonNull,
GraphQLList
} from 'graphql';




let bookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { 
            type: GraphQLInt,
            resolve: (book) => book.id
        },
        title: { type: GraphQLString },
        isbn: { type: GraphQLString },
        isbn13: { type: GraphQLString },
        asin: { type: GraphQLString },
        kindle_asin: { type: GraphQLString },
        marketplace_id: { type: GraphQLString },
        country_code: { type: GraphQLString },
        image_url: { type: GraphQLString,
            resolve: (book) =>book.image_url},
        small_image_url: { type: GraphQLString },
        publication_year: { type: GraphQLString },
        publication_month: { type: GraphQLString },
        publication_day: { type: GraphQLString },
        publisher: { type: GraphQLString },
        language_code: { type: GraphQLString },
        is_ebook: { type: GraphQLString },
        average_rating: { type: GraphQLString },
        num_pages: { type: GraphQLInt },
        format: { type: GraphQLString },
        edition_information: { type: GraphQLString },
        ratings_count: { type: GraphQLInt },
        text_reviews_count: { type: GraphQLInt },
        url: { type: GraphQLString },
        link: { type: GraphQLString }
    })
});


export default bookType;