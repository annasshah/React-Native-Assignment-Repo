const stylesFile = {
    container: {
        flex: 1,
    },
    firstScreen: {
        flex: 1,
        paddingHorizontal: 35
    },
    firstScreenHeading: {
        flex: 1,
        // paddingTop:20,
        justifyContent: 'flex-end'
    },
    firstScreenHeadingText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 32,
        color: '#000000'
    },
    firstScreenContent: {
        flex: 5,
        justifyContent: 'center'
    },
    firstScreenInput: {
        borderWidth: 2,
        borderColor: '#D1D1D1',
        borderRadius: 7,
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    firstScreenButton: {
        backgroundColor: '#000000',
        borderRadius: 7,
        paddingVertical: 15,
        marginTop: 29

    },
    firstScreenButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20

    },

    secondScreenContainer: {
        flex: 1,
        backgroundColor: '#F8F6F6'
    },
    secondScreenTopSection: {
        flex: 2.5,
        paddingHorizontal: 20,
        backgroundColor: '#000000',
        paddingBottom: 15
        // justifyContent:'center'
    },
    secondScreenGreeting: {
        color: '#fff',
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 30

    },
    secondScreenDesc: {
        color: '#fff',
        fontSize: 13,
        marginTop: 3
    },
    secondScreenContentSection: {
        paddingHorizontal: 20,
        flex: 7
    },
    secondScreenInputMain: {
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
        borderRadius: 7,
        paddingHorizontal: 20,
        paddingVertical: 8,

        marginTop: -40,
        backgroundColor: '#fff',
        fontSize: 18

    },

    secondScreenAddTaskButton: {
        flex: 0.5,


    },
    secondScreenAddTaskButtonTxt: {
        fontSize: 45,
        color: '#000000'
    },
    

    secondScreenInput: {
        flex: 6,
    },
    secondScreenYourTodosHeading: {
        fontSize: 15,
        fontWeight: '700',
        color: '#000000',
        // marginTop: 25,
        marginBottom: 10
    },
    secondScreenYourTodosHeadingAndDeleteButtonMain:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingTop:30,
        paddingBottom:10
    },

    emptyTodoMessage:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    emptyTodoMessageText:{
        color:'red'
    },

    
    deleleAllButtonTxt:{
        fontSize: 14,
        color:'black',
        textDecorationLine:'underline'

    },




    secondScreenTodosContainer: {
        paddingTop: 10,
        paddingBottom: 100,
    },

    secondScreenTodosMain: {
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.16,
        shadowRadius: 40,
        elevation: 1,
        borderRadius: 7,
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: '#ffff',
    },
    





    TodoCheckBoxAndText: {

        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start'

    },

    TodoTextMain: {
        flex: 9
    },


    TodoText: {
        fontSize: 20,
        color: '#2E2E2E'
    },

    TodoTextFinished: {
        fontSize: 20,
        color: '#BBBBBB',
        textDecorationLine:'line-through'
    },

    TodoCheckBoxMain: {
        paddingTop: 6,
        flex: 1,

    },

    TodoCheckBox: {
        width: 14,
        height: 14,
        borderWidth: 1.2,
        borderColor: '#B5B5B5',
        borderRadius: 3

    },
    TodoDateAndTimeTxt: {
        flex: 1,
        fontSize: 13,
        color: '#B9B9B9',
        textAlign: 'right'
    },
    TodoDetailsMain: {
        flexDirection: 'row',
        paddingTop: 15,
        justifyContent: 'center'

    },
    TodoActionButtonsMain: {
        flex: 1,
        flexDirection: 'row',
    },
    // TodoDeleteButton:{
    // },
    TodoDeleteButtonTxt: {
        color: 'red',
        fontSize: 15
    },

    TodoEditButton: {
        marginRight: 20
    },
    TodoEditButtonTxt: {
        color: 'green',
        fontSize: 15
    }

}

export default stylesFile