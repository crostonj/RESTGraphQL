

import {
GraphQLInt,
GraphQLObjectType,
GraphQLString,
GraphQLNonNull,
GraphQLList,
GraphQLBoolean,
GraphQLFloat
} from 'graphql';


let loanType = new GraphQLObjectType({
    name: 'Loan',
    fields: () => ({

        AccountNumber: { type: GraphQLString },
        GroupId: { type: GraphQLString },
        LoanNumber: { type: GraphQLInt },
        LoanType: { type: GraphQLString },
        LenderId: { type: GraphQLString },
        Status: { type: GraphQLString },
        InterestRate: { type: GraphQLInt },
        InterestRateReduction: { type: GraphQLFloat },
        EffectiveInterestRate: { type: GraphQLFloat },
        CurrentPrincipal: { type: GraphQLInt },
        OutstandingInterest: { type: GraphQLFloat },
        OutstandingFees: { type: GraphQLInt },
        TotalBalance: { type: GraphQLFloat },
        DelinquentAmount: { type: GraphQLInt },
        OriginalTerm: { type: GraphQLInt },
        TermRemaining: { type: GraphQLInt },
        RepaymentPlan: { type: GraphQLString },
        CurrentPaymentAmount: { type: GraphQLFloat },
        HasAch: { type: GraphQLBoolean },
        AchAlternateAmount: { type: GraphQLInt },
        DueDate: { type: GraphQLString },
        School: { type: GraphQLString },
        IsPrivate: { type: GraphQLBoolean },
        IsActive: { type: GraphQLBoolean },
        DeferEligibility: { type: GraphQLString },
        ConvertToRepayDate: { type: GraphQLString },
        OriginalLoanBalance: { type: GraphQLInt },
        CappedInterestAmount: { type: GraphQLInt },
        PrincipalPaidYTD: { type: GraphQLInt },
        InterestPaidYTD: { type: GraphQLInt },
        GuarantorId: { type: GraphQLString },
        PeriodStartDate: { type: GraphQLString },
        PeriodEndDate: { type: GraphQLString },
        IsPlusConsol: { type: GraphQLBoolean },
        IsSpousalConsol: { type: GraphQLBoolean },
        PurchaseDate: { type: GraphQLString },
        GovernmentSubsidyStatus: { type: GraphQLString },
        FirstDisbursementDate: { type: GraphQLString },
        LastDisbursementDate: { type: GraphQLString },
        DaysPastDue: { type: GraphQLInt },

    })
});

export default loanType;