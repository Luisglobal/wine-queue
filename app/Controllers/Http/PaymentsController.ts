import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Payment from 'App/Models/Payment';

export default class PaymentsController {

    public async receive({ request }: HttpContextContract) {

        const { nome, email, amount, status } = request.only(['nome', 'email', 'amount', 'status']);

        const payment = await Payment.create({
            nome,
            email,
            amount,
            account_status: status
        });

        return payment;
    }
}
