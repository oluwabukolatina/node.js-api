module.exports = (controller, router) => {

    router.param('id', controller.params);

    router.route('/')
        .post(controller.get)
        .get(controller.post)

    router.route('/:id')
        .get(controller.getOne)
        .put(controller.put)
        .delete(controller.delete)

};