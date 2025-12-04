package lida.javaBegginer.order_app.dto;

import lombok.Data;

@Data
public class OrderRequestDTO {
    private OrderDTO orderDTO;
    private CustomerDTO customerDTO;
}
