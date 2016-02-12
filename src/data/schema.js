import {
GraphQLObjectType,
GraphQLNonNull,
GraphQLSchema,
GraphQLInt,
GraphQLList,
GraphQLString
} from 'graphql';


let Schema = (service, id) => {
    let bookType = new GraphQLObjectType({
        name: 'Books',
        fields: () => ({
            _id: { type: GraphQLInt },
            title: { type: GraphQLString },
            url: { type: GraphQLString },
            idField: { type: GraphQLInt },
            titleField: { type: GraphQLString },

            isbnField: { type: GraphQLString },

            isbn13Field: { type: GraphQLString },

            asinField: { type: GraphQLString },

            kindle_asinField: { type: GraphQLString },

            marketplace_idField: { type: GraphQLString },

            country_codeField: { type: GraphQLString },

            image_urlField: { type: GraphQLString },

            small_image_urlField: { type: GraphQLString },

            publication_yearField: { type: GraphQLString },

            publication_monthField: { type: GraphQLString },

            publication_dayField: { type: GraphQLString },

            publisherField: { type: GraphQLString },

            language_codeField: { type: GraphQLString },

            is_ebookField: { type: GraphQLString },

            average_ratingField: { type: GraphQLString },

            num_pagesField: { type: GraphQLInt },

            formatField: { type: GraphQLString },
            edition_informationField: { type: GraphQLString },

            ratings_countField: { type: GraphQLInt },

            text_reviews_countField: { type: GraphQLInt },

            urlField: { type: GraphQLString },

            linkField: { type: GraphQLString },
            
        })
    });


    let schema = new GraphQLSchema({
        query: new GraphQLObjectType({
            name: 'Query',
            fields: () => ({
                book: {
                    type: new GraphQLList(bookType),
                    resolve: () => {
                     [
                        service.getBookById(id)
                    ]
                    
                    }
                }

            })
        })
    
        //mutation: ...
    });

    return schema
}

export default Schema;
